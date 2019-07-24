import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react';
import SignUp from './SignUp.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import swal from 'sweetalert';
// import { FacebookLoginButton } from "react-social-login-buttons";
import UserProfile from './UserProfile.js';
import RouteButton from './RouteButton.js';
import {  fireStore } from './UsingFireBase';
import logo from './subletPic/SubMeLogo.jpg';


class NewLogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            userPrivateName: "1",
            userFamiliyName: "1",
            gender: "1",
            age: "1",
            userId: "1",
            pic1: "1",
            userMail: "1",
            exists: 0,
            AllUsers: [],
        }
    }

    checkUser = () => {
      //  debugger;
        var yes = 0;
        if(localStorage.getItem('UserLoggedIn') !== null)
        {
            swal(" You Are Already Logged In ! ");
            return 0;
        }
          this.state.AllUsers.map((user) => {
      //  UserTbl.map((user) => {
            if (user.password === this.state.password && user.userMail === this.state.userMail) {
                swal("Welcome back " + user.userPrivateName + " " + user.userFamiliyName );
                yes = 1;
                this.setState({
                    exists: 1,
                    userPrivateName: user.userPrivateName,
                    userFamiliyName: user.userFamiliyName,
                    gender: user.gender,
                    age: user.age,
                    userMail: user.userMail,
                    pic1: user.pic1
                })
               // debugger;
                localStorage.setItem('UserLoggedIn', user.userMail);
                localStorage.setItem('UserObjectLoggedIn', JSON.stringify(user));

                return 1;
            }
        });

        if (yes === 0) {
            swal(" Invalid UserName or Password ");
        }
        return 0;
    }

    change = e => {
        //  debugger;
        this.setState({ [e.target.name]: e.target.value });
    };

    getMyStory() {
      // debugger;
        var items = [];
        var item;
        fireStore.collection("Users").get().then((snapshot) => {
          //  debugger;
            snapshot.docs.map((doc) => {
                item = doc.data()
                items.push(item)
            });
            this.setState({
                AllUsers: items,
                // or: 1
            });
        });
    }

    componentDidMount() {
      //  debugger;
        this.getMyStory();
    }

    render() {
       // debugger;
        if (this.state.exists === 1) {
            return (
                <UserProfile {...this.state} />
                //  <App {...this.state}/> 
            );
        }
        return (
            <div  >
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                       </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' name='userMail' iconPosition='left' placeholder='E-mail address'
                                    onChange={e => this.change(e)} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    onChange={e => this.change(e)}
                                />

                                <Button color='teal' fluid size='large' onClick={() => this.checkUser()} > Login   </Button>
                            </Segment>
                        </Form>
                        <Message>
                            <RouteButton value="  Sign Up  !" pathname="/SignUp" />
                        </Message>
                        {/* <Message>
                            <FacebookLoginButton onClick={() => alert("Hello")}> New to us ?  Sign Up with Facebook !  </FacebookLoginButton>
                        </Message> */}
                         <Image src={logo} size='small' fluid centered /> <br/>
                    </Grid.Column>
                    {/* <Grid.Column style={{ maxWidth: 450 }}>
                    <Image src={logo} size='small' fluid centered /> <br/>

                    </Grid.Column> */}
                </Grid>

                <div>
                    <Router>
                        <div>
                            <Route path="/SignUp" component={SignUp} />
                        </div>
                    </Router>

                </div>

            </div>

        );
    }
}

export default NewLogIn;



