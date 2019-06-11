import React from 'react';
import { connect } from 'react-redux';

const People = ({ people }) => {
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

export default connect(mapStateToProps, {})(People);