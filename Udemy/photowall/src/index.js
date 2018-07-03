import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    render() {
        return(
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        )
    }
}
class Title extends Component {
    render() {
        return(
            <h1>
                {this.props.title}
            </h1>
        )
    }
}
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

ReactDOM.render(<Main />, document.getElementById('root'));