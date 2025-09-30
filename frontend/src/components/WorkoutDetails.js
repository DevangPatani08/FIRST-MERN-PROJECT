import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const WorkoutDetails = ({ workout }) => {
    const { _id, title, reps, load, createdAt } = workout;

    return (
        <div className='workout-details'>
            <div>
                <h4>{title}</h4>
                <p><strong>Load (in Kgs):</strong> {load}</p>
                <p><strong>Reps:</strong> {reps}</p>
                <p><strong>Created At:</strong> {createdAt}</p>
            </div>
            <button type='button'><FaRegTrashAlt /></button>
        </div>
    );
};

export default WorkoutDetails;