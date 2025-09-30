import React, { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, load, reps };

        const res = await fetch('/api/workouts/', { method: 'POST', body: JSON.stringify(workout), headers: { 'Content-Type': 'application/json' } });
        
        const json = await res.json();
        
        if (!res.ok) {
            setError(json.error);
        } else {
            setError(null);
            dispatch({type: 'CREATE_WORKOUTS', payload: json})
            console.log('New workout added: ', json);
            setTitle('');
            setLoad('');
            setReps('');
        }
    };

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Exersice Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            
            <label>Load (in Kgs):</label>
            <input type='number' value={load} onChange={(e) => setLoad(e.target.value)} />
            
            <label>Reps:</label>
            <input type='number' value={reps} onChange={(e) => setReps(e.target.value)} />

            <button type='submit'>Add Workout</button>
            { error && <div className='error'>{error}</div> }
        </form>
    );
};

export default WorkoutForm;