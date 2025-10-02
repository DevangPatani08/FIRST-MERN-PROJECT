import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutDetails = ({ workout }) => {
    const { _id, title, reps, load, createdAt } = workout;

    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        const data = await fetch('/api/workouts/' + _id, { method: 'DELETE', headers: { 'Authorization': `Bearer ${user.token}` } });

        if (!user) {
            return;
        }

        const res = await data.json();
        
        if (data.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: res });
        }
    };

    return (
        <div className='workout-details'>
            <div>
                <h4>{title}</h4>
                <p><strong>Load (in Kgs):</strong> {load}</p>
                <p><strong>Reps:</strong> {reps}</p>
                <p><strong>Created At:</strong> {formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</p>
            </div>
            <button type='button' onClick={handleClick}><FaRegTrashAlt /></button>
        </div>
    );
};

export default WorkoutDetails;