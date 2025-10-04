import React from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutDetails = ({ workout }) => {
    const { _id, title, reps, load, createdAt } = workout;

    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        const res = await fetch('/api/workouts/' + _id, { method: 'DELETE', headers: { 'Authorization': `Bearer ${user.token}` } });
        const json = await res.json();

        if (!user) {
            return;
        }
        
        if (res.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    };

    return (
        <div className='workout-details'>
            <div>
                <h4>{title}</h4>
                <p><strong>Load (in Kgs):</strong> {load}</p>
                <p><strong>Reps:</strong> {reps}</p>
                <p><strong>Created At:</strong> {formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</p>
                <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>
        </div>
    );
};

export default WorkoutDetails;