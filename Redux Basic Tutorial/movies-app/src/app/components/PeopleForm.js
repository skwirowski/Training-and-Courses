import React, { createRef } from 'react';
import { connect } from 'react-redux';
import actions from '../people/redux/actions';

const PeopleForm = (props) => {
    const peopleInput = createRef();

    const addPerson = (event) => {
        event.preventDefault();
        props.add(peopleInput.current.value);
        peopleInput.current.value = '';
    }

    return (
        <form onSubmit={addPerson}>
            <input ref={ peopleInput} />
            <button type='submit'>Add person</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: person => dispatch(actions.add(person))
});

export default connect(null, mapDispatchToProps)(PeopleForm);