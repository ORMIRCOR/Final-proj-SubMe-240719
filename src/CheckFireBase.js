import React, { Component } from 'react';
import { fireStore } from './UsingFireBase';
import Filter from './Filter';
// import {ApartmentStack}  from './Data';

class CheckFireBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NiceToHaveArr: this.props.location.state[0].NiceToHaveArr,
            searchValues: this.props.location.state[0].searchOrPublishValues,
            ApartmentsArrFirebase: [],
            items: [],
            or: 0,
        }
    }

    getMyStory() {
        //   debugger;

        var items = [];
        var item;
        //  fireStore.settings({ timestampsInSnapshots: true});
        fireStore.collection("Sublet").get().then((snapshot) => {
           //   debugger;
            snapshot.docs.map((doc) => {
                item = doc.data()
                items.push(item)
            });
           // debugger;
            this.setState({
                ApartmentsArrFirebase: items,
           //  ApartmentsArrFirebase: ApartmentStack,
                or: 1
            });
        });
    }

    componentDidMount() {
         // debugger;
        this.getMyStory();
    }

    render() {
          // debugger;
        if (this.state.or === 1) {
            return <Filter {...this.state} />

        }
        else {
            return (
                <div>
                    <p>loading...</p>
                </div>
            );
        }
    }
}

export default CheckFireBase;

// import console = require('console');
// import firebase from 'firebase';
// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyB9nihuUkl-_yVU40W5BUa7wCZSjrcmLeo",
//     authDomain: "myapp-723fe.firebaseapp.com",
//     databaseURL: "https://myapp-723fe.firebaseio.com",
//     projectId: "myapp-723fe",
//     storageBucket: "myapp-723fe.appspot.com",
//     messagingSenderId: "390163360780",
//     appId: "1:390163360780:web:f3df439e6d799416"
//   };

// firebase.initializeApp(firebaseConfig);


    // componentWillMount() {
    //     debugger;
    //   //  const db = firebase.firestore();
    //  //   var docRef = db.collection("Sublet").doc("bFB1k763xlae7wrBHm0T");

    // //    var docRef = fireStore.collection("Sublet").doc("bFB1k763xlae7wrBHm0T");

    // //             docRef.get().then(function(doc) {
    // //         if (doc.exists) {
    // //             console.log("Document data:", doc.data());
    // //             data = doc.data();
    // //             console.log("Document data33333:", data);
    // //          //   this.setState({arr : doc.data() });
    // //          //   console.log("Document data33333:", 55555);
    // //         } else {
    // //             // doc.data() will be undefined in this case
    // //             console.log("No such document!");
    // //         }
    // //     }).catch(function(error) {
    // //         console.log("Error getting document:", error);
    // //     });

    //     // const rootRef = firebase.database().ref();
    //     // const orRef = rootRef.child('avi');

    //     // orRef.on('value', snap => {
    //     //     this.setState({ or: snap.val() });
    //     //    //  console.log(this.state.or)
    //     // })

    // }


            // snapshot.docs.forEach(doc => {
            //     let item = doc.data();

            //     items.push(item),
            //         // this.setState(this.state);

            //         this.setState({
            //             ApartmentsArrFirebase: items,
            //             or: 1
            //         });
            //         alert(items.length);
            // });

                 // להריץ מחר או ביום שלישי
        // fireStore.collection("Sublet").get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // doc.data() is never undefined for query doc snapshots
        //  let item = doc.data();
        //  items.push(item);
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // });