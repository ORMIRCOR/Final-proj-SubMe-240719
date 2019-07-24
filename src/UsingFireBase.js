import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9nihuUkl-_yVU40W5BUa7wCZSjrcmLeo",
    authDomain: "myapp-723fe.firebaseapp.com",
    databaseURL: "https://myapp-723fe.firebaseio.com",
    projectId: "myapp-723fe",
    storageBucket: "myapp-723fe.appspot.com",
    messagingSenderId: "390163360780",
    appId: "1:390163360780:web:f3df439e6d799416"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const fireStore = firebase.firestore();

export {
  database, fireStore
};