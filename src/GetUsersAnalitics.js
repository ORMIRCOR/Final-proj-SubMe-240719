import React, { Component } from 'react';
import { fireStore } from './UsingFireBase';
import Notifications from './Notifications';

class GetUsersAnalitics extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UsersAnalitics: [],
            valuesToPost: this.props.valuesToPost,
            ApartmentsArrFirebase: " ",
            items: [],
            or: 0,
         }
    }

    getMyStory() {
         //  debugger;

        var items = [];
        var item;
        //  fireStore.settings({ timestampsInSnapshots: true});
        fireStore.collection("UserAnalitics").get().then((snapshot) => {
            //   debugger;
            snapshot.docs.map((doc) => {
                item = doc.data()
                items.push(item)
            });
            this.setState({
                UsersAnalitics: items,
                or: 1
            });
        });
    }

    componentDidMount() {
        //  debugger;
        this.getMyStory();
    }



    render() { 
           //   debugger;
           if (this.state.or === 1) {
            return <Notifications {...this.state} />

        }
        else {
            return (
                <div>
                    <p></p>
                </div>
            );
        }
    }
}
 
export default GetUsersAnalitics ;