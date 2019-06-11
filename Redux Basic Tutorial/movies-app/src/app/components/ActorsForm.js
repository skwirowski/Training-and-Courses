import React, { createRef } from 'react';
import { connect } from 'react-redux';
import actions from '../actors/redux/actions';

const ActorsForm = (props) => {
    const actorInput = createRef();

    const addActor = (event) => {
        event.preventDefault();
        props.add(actorInput.current.value);
        actorInput.current.value = '';
    }

    return (
        <form onSubmit={ addActor }>
            <input ref={ actorInput} />
            <button type='submit'>Add Actor</button>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    add: actor => dispatch(actions.add(actor))
});

export default connect(null, mapDispatchToProps)(ActorsForm);