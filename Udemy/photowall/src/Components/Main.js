import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';

class Main extends Component {
    render() {
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
                <Route exact path="/single/:id"
                       render={(params) => (
                           <Single {...this.props}
                                   {...params}
                           />
                       )}
                />
            </div>
        )
    }
}

export default Main