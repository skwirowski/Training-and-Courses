import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';

class Main extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Route exact path="/"
                       render={() => (
                           <div>
                               <PhotoWall {...this.props} />
                           </div>
                       )} />
                <Route exact path="/addphoto"
                       render={() => (
                           <AddPhoto {...this.props}/>
                       )}
                />
            </div>
        )
    }
}

export default Main