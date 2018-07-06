import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <Route exact path="/"
                       render={() => (
                           <div>
                               <Title title={"PhotoWall"}/>
                               <PhotoWall posts={this.props.posts} />
                           </div>
                       )} />
                {/*<Route exact path="/addphoto"*/}
                       {/*render={({history}) => (*/}
                           {/*<AddPhoto onAddPhoto={(addedPost) => {*/}
                               {/*this.addPhoto(addedPost);*/}
                               {/*history.push('/')*/}
                           {/*}} />*/}
                       {/*)}*/}
                {/*/>*/}
            </div>
        )
    }
}

export default Main