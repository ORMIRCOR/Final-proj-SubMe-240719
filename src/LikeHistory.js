import React, { Component } from 'react';
import { fireStore } from './UsingFireBase';
import ShowHistoryLike from './ShowHistoryLike';

class LikeHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adsThatILiked: [], 
             or: 0,
         }
    }

    
    getMyStory() {
           debugger;

        var checklocalstorage = localStorage.getItem('UserLoggedIn');

        var ApartmentsArr = [];
        var Apartment;

        fireStore.collection("HistoryLike").get().then((snapshot) => {
            debugger;
          snapshot.docs.map((doc) => {
            var str = doc.id;
            var n = str.startsWith(checklocalstorage);
              if(n)
              {
            Apartment = doc.data()
            ApartmentsArr.push(Apartment)
              }
              debugger;
          });
    
            this.setState({
                adsThatILiked: ApartmentsArr,
                or: 1
            });
        });
    }

    componentDidMount() {
          debugger;
        this.getMyStory();
    }



    render() {
         debugger;
      if (this.state.or === 1) {
          return <ShowHistoryLike {...this.state} />

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

export default LikeHistory;