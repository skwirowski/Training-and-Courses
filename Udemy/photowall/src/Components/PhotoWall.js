import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Photo from './Photo';


function PhotoWall(props) {
    return(
        <div>
            <Link className="addIcon"
                  to="/addphoto">
            </Link>
            <div className="photo-grid">
                {props.posts.map((post, index) => <Photo key={index}
                                                         post={post}
                />)}
            </div>
        </div>
    )
}
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};
export default PhotoWall