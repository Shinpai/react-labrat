import React from 'react';

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
    this.Messagelist = this.Messagelist.bind(this);
    this.unreadMessages = ['React', 'Re: React', 'Re:Re: React'];
  }

  Messagelist() {
    return (
      <ul>
        {this.unreadMessages.map((value, index) => {
          return <span key={index}>{value}</span>
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {this.Messagelist()}
        {this.unreadMessages.length > 0 &&
          <h2>
            You have {this.unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}



export default Mailbox;