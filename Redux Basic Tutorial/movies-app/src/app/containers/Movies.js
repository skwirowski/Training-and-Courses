import React from 'react';
import { connect } from 'react-redux';

const Movies = ({ movies }) => {
	return (
		<div>
			<h2>Movies</h2>
			<ul>
				{movies.list.map((movie, index) => (
					<li key={index}>{movie}</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies
})

export default connect(mapStateToProps, {})(Movies);