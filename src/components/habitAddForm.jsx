import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const intputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = intputRef.current.value;
        name && props.onAdd(name);
        intputRef.current.value = '';
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <input ref={intputRef} type="text" className='add-input' placeholder='habit'></input>
            <button className='add-button'>ADD</button>
        </form>
    );

});

export default HabitAddForm;