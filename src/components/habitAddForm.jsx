import React, { Component } from 'react';

class HabitAddForm extends Component {
    intputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.intputRef.current.value;
        name && this.props.onAdd(name);
        this.intputRef.current.value = '';
    }

    render() {

        return (
            <div>
                <form className='add-form' onSubmit={this.onSubmit}>
                    <input ref={this.intputRef} type="text" className='add-input' placeholder='habit'></input>
                    <button className='add-button'></button>
                </form>
            </div>
        );
    }
}

export default HabitAddForm;