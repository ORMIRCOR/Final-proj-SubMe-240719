import React, { Component } from 'react';
import { database } from './UsingFireBase';
import { Button, Header } from 'semantic-ui-react'
//import { Card, Image, Header } from 'semantic-ui-react'
import RouteButton from './RouteButton.js';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: '',
      users: [],
     // adsThatILiked: this.props.location.state,
      //owner: "ormircor@gmail.com"
      owner: this.props.location.state,
      sublet:this.props.location.subletId,
    };

    this.onAddMessage = this.onAddMessage.bind(this);
  }

  componentWillMount() {
   // debugger;
    /*const userRef = database.ref('users')
      .orderByKey()
      .limitToLast(100);

    userRef.once('value', snapshot => {
      const users = [snapshot.val()];
      this.setState({ users: users });
    });*/

    /////
    var UserLoggedInLocalStorage = localStorage.getItem('UserLoggedIn');
    // database.ref('users').push({username: this.state.owner});
    // localStorage.setItem('chat_username', this.state.owner);
    // this.props.history.push('/chat');
    /*database.ref('users').push({ username: UserLoggedInLocalStorage });*/
    localStorage.setItem('chat_username', UserLoggedInLocalStorage);
  //  this.props.history.push('/chat');
    //////

   // const username = localStorage.getItem('chat_username');
    this.setState({ username: UserLoggedInLocalStorage })
    //const messagesRef = database.ref('messages').orderByChild("key").limitToLast(100);
  //  debugger;
    const messagesRef = database.ref('messages').orderByChild("key").equalTo( this.state.sublet + "_" + this.state.owner + "_" + UserLoggedInLocalStorage );
    //const messagesRef = database.ref('messages').orderByChild("read").equalTo(false);

    //debugger;
      console.log("messagesRef");
      console.log(messagesRef);
    messagesRef.on('value', snapshot => {
    //  debugger;
      let messagesObj = snapshot.val() || [];
      let messages = [];
      Object.keys(messagesObj).forEach(key => messages.push(messagesObj[key]));
      messages = messages.map((message) => { return { text: message.text, timeStamp: message.timeStamp, date: message.DateStamp } })
      this.setState(prevState => ({
        messages: messages,
      }));
    });
  }

  onAddMessage(event) {
    var today = new Date();
    var x = today.toDateString();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //  debugger;
    event.preventDefault();
    // database.ref('messages').push({ text: this.input.value, user: this.state.owner });
    database.ref("messages").push({
      key: this.state.sublet + "_" + this.state.owner + "_" + this.state.username,
      text: this.input.value,
      receiver: this.state.owner,
      sender: this.state.username,
      timeStamp: time,
      DateStamp : x,
      subletId: this.state.sublet,
      read: false
    });
    this.input.value = '';
  }

  render() {
   // debugger;
    return (
      <div>
        <div className="padding-13 messages-div">
        <Header as='h2' color='green' textAlign='center' block>   Chat Messages </Header>
          {/* <h2>Chat Messages</h2> */}
          {this.state.messages.map((message) => {
            console.log(message);
           // debugger;
            const _class = message.user === this.state.username ? 'message-right container' : 'message-right container';
          //  debugger;
            // var today = new Date();
            // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return (
              <div className={_class}>
                {/* <h6 className="name-heading">{message.user}</h6> */}
                <span className="time-left">{message.date}</span> &nbsp; <span className="time-left">{message.timeStamp}</span>
                <h6 className="name-heading">{this.state.username}</h6>
                <p className="marg-left-10">{message.text}</p>
                <br/>
                
              </div>
            )
          })}
        </div>
        <div className="container textarea-div">
          <textarea className="text-area" ref={node => this.input = node}></textarea>
          <button className="btn btn-info send-btn " onClick={this.onAddMessage}>Send</button>
          <Button color="blue" onClick={() => this.props.history.goBack()} fluid  > Go Back TO your Liked Sublet list </Button>
          {/* <RouteButton value="Go Back TO your Liked Sublet list " pathname="/LikedPosts" state={this.state.adsThatILiked} /> */}

        </div>
      </div>
    );
  }
}