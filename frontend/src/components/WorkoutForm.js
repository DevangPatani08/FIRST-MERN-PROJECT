import React, { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const { user } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You need to be logged in!...');
            return;
        }

        const workout = { title, load, reps };

        const res = await fetch('/api/workouts/', { method: 'POST', body: JSON.stringify(workout), headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` } });
        
        const json = await res.json();
        
        if (!res.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setError(null);
            dispatch({type: 'CREATE_WORKOUT', payload: json})
            console.log('New workout added: ', json);
            setTitle('');
            setLoad('');
            setReps('');
            setEmptyFields([]);
        }
    };

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Exersice Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''} />
            
            <label>Load (in Kgs):</label>
            <input type='number' value={load} onChange={(e) => setLoad(e.target.value)} className={emptyFields.includes('load') ? 'error' : ''} />
            
            <label>Reps:</label>
            <input type='number' value={reps} onChange={(e) => setReps(e.target.value)} className={emptyFields.includes('reps') ? 'error' : ''} />

            <button type='submit'>Add Workout</button>
            { error && <div className='error'>{error}</div> }
        </form>
    );
};

export default WorkoutForm;