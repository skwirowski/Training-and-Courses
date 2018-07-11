import React from "react";

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmptyMailboxClick = this.handleEmptyMailboxClick.bind(this);
    this.handleDownloadMailboxClick = this.handleDownloadMailboxClick.bind(this);
    this.state ={
      messages: [],
    }
  }

  handleEmptyMailboxClick() {
    this.setState({
      messages: [],
    });
  }

  handleDownloadMailboxClick() {
    this.setState({
      messages: ['React', 'Re: React', 'Re:Re: React'],
    });
  }

  render() {
    const mailbox = this.state.messages;
    const listMessages = mailbox.map((message, index) =>
      <li key={index}>{message}</li>
    );
    let button;

    if (mailbox.length > 0) {
      button = <EmptyMailboxButton onClick={this.handleEmptyMailboxClick} />
    } else {
      button = <DownloadMailboxButton onClick={this.handleDownloadMailboxClick} />
    }

    return(
      <div>
        <h1>This is your mailbox</h1>
        {mailbox.length > 0 &&
        <h2>
          You have {mailbox.length} unread messages.
        </h2>
        }
        <ul>{listMessages}</ul>
        {button}
      </div>
    );
  }
}

function EmptyMailboxButton(props) {
  return(
    <button onClick={props.onClick}>
      Empty mailbox
    </button>
  );
}

function DownloadMailboxButton(props) {
  return(
    <button onClick={props.onClick}>
      Download mailbox
    </button>
  );
}

export default Mailbox