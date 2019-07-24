import React, { Component } from 'react';

class AppChat extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default AppChat;