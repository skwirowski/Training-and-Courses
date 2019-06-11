import React, { createRef } from 'react';
import { connect } from 'react-redux';
import actions from '../people/actions';

const PeopleForm = (props) => {
    const peopleInput = createRef();
    const deletePersonButton = createRef();

    const addPerson = (event) => {
        event.preventDefault();
        props.add(peopleInput.current.value);
        peopleInput.current.value = '';
    }
    const removePerson = () => {
        props.remove(deletePersonButton.current.value);
    }

    return (
        <form onSubmit={addPerson}>
            <input ref={ peopleInput} />
            <button type='submit'>Add person</button>
            <button type='button'>Remove person</button>
        </form>
    )
}