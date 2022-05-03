import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm'


const Habits = ({ habits, onIncrement, onDecrement, onDelete, onAdd, onReset }) => {
    return (
        <>
            <ul>
                <HabitAddForm onAdd={onAdd} />
                {habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete} />
                ))}
            </ul>
            <button className='habits-reset' onClick={onReset}>reset</button>
        </>
    );
};

export default Habits;