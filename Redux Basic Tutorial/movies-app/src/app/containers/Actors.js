import React from 'react';
import { connect } from 'react-redux';

const Actors = ({ actors }) => {
    return (
        <div>
            <h2>Actors</h2>
            <ul>
                { actors.list.map((actor, index) => (
                    <li key={index}>{actor}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    actors: state.actors
});

export default connect(mapStateToProps, {})(Actors);