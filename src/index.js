import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
//import SignUp from './SignUp';
//import NewLogIn from './NewLogIn';

// import firebase from 'firebase';
//import * as firebase from 'firebase';
//import CheckFireBase from './CheckFireBase';

//import User from './User';
//import Chat from './Chat';
//import AppChat from './AppChat';
//import NiceToHave from './NiceToHave';


// import { HashRouter, Route } from 'react-router-dom'
// import CheckEmail from './CheckEmail';
import CheckAuotoComplete from './CheckAuotoComplete';


// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/6.1.1/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#reserved-urls -->

// // <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>


// const firebaseConfig = {
//   apiKey: "AIzaSyB9nihuUkl-_yVU40W5BUa7wCZSjrcmLeo",
//   authDomain: "myapp-723fe.firebaseapp.com",
//   databaseURL: "https://myapp-723fe.firebaseio.com",
//   projectId: "myapp-723fe",
//   storageBucket: "myapp-723fe.appspot.com",
//   messagingSenderId: "390163360780",
//   appId: "1:390163360780:web:f3df439e6d799416"
// };


// var app = firebase.initializeApp(firebaseConfig);


// ReactDOM.render(<CheckEmail />, document.getElementById('root'));

  ReactDOM.render(<App />, document.getElementById('root'));

  // ReactDOM.render(<CheckAuotoComplete />, document.getElementById('root'));


 // ReactDOM.render(<NiceToHave />, document.getElementById('root'));


// ReactDOM.render(
//   <HashRouter>
//   <div>
//       <Route exact path="/" component={AppChat}></Route>
//       <Route exact path="/" component={User}></Route>
//       <Route exact path="/chat" name="chat" component={Chat}></Route></div>
//   </HashRouter>, document.getElementById('root'));


 // ReactDOM.render(<SignUp />, document.getElementById('root'));

//  ReactDOM.render(<CheckFireBase />, document.getElementById('root'));


 // ReactDOM.render(<NewLogIn />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
