import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';


function PhotoWall(props) {
    return(
        <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    )
}
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};
export default PhotoWall