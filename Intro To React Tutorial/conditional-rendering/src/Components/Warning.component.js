import React from 'react';

import Styles from './styles.css'

function WarningBanner(props) {
    if (!props.warning) {
      return null;
    }

    return (
      <div className="warning">
        Warning!
      </div>
    );
}

class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = {
      showWarning: true,
    }
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return(
      <div>
        <WarningBanner warning={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Warning