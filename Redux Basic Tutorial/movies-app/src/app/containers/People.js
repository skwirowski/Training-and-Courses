import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../people/redux/operations';

const People = ({ people, getPeople }) => {
    useEffect(() => {
        getPeople();
    }, []);

    return (
        <div>
            <h2>People</h2>
            <ul>
                { people.list.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => ({
    people: state.people
});

const mapDispatchToProps = dispatch => ({
    getPeople: () => dispatch(getPeople())
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(People);