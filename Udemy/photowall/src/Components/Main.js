import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
    render() {
        return(
            <div>
                <Title title={"To Dos"}/>
                <List tasks={['Take out the trash', 'Walk the dog', 'Mow the lawn']} />
                <List tasks={['Shovel the driveway', 'Finish the laundry', 'Hose the driveway']} />
            </div>
        )
    }
}
export default Main