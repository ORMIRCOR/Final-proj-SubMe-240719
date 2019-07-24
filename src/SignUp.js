import React, { Component } from 'react';
import './App.css';
import { fireStore } from './UsingFireBase';
import UserProfile from './UserProfile.js';
import swal from 'sweetalert';
import { Button, Form, Header, Input, Icon, Checkbox, Modal, Image } from 'semantic-ui-react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: 0,
            userMail: "",
            userPrivateName: "",
            userFamiliyName: "",
            age: "",
            password: "",
            gender: "",
            pic1: "",
            accept: "0"
        }
    }

    changeTuggle = (name) => {
        debugger;
        if (this.state[name] === "0") {
            this.setState({ [name]: "1" });
        }
        else {
            this.setState({ [name]: "0" });
        }
    };

    handleSubmit() {
        debugger;

        if(localStorage.getItem('UserLoggedIn') !== null)
        {
            swal(" You Are Already Logged In ! ");
            return 0;
        }

        if (this.state.pic1 === "" )  {
            swal({
              title: "Err",
              text: "NOTE - You have to upload a Profile picture",
              icon: "warning",
            });
            return false;
          }

        if (this.state.accept === "0") {
            // event.preventDefault();
            swal({
                title: "Err",
                text: "NOTE - You have to agree to the Terms and Conditions and Privacy Policy",
                icon: "warning",
            });
            return 0;

        }

        else {

            var success;
           // localStorage.setItem('UserLoggedIn', this.state.userMail); // Now i can "Sail" with this localStorage all over the React Tree :) 
            var cityRef = fireStore.collection("Users").doc(this.state.userMail);
            debugger;
            var setWithMerge = cityRef.set({
                userMail: this.state.userMail,
                userPrivateName: this.state.userPrivateName,
                userFamiliyName: this.state.userFamiliyName,
                age: this.state.age,
                password: this.state.password,
                gender: this.state.gender,
                pic1: this.state.pic1,
                numberOfSublets: 0
            },
                // },
                //  { merge: true }
            )
                .then(function () {
                    console.log("create new user!");
                    swal({
                        title: "Good job!",
                        text: "you are in !",
                        icon: "success",
                        button: "ok!",
                    });
                    this.setState({ success: 1 });
                    success = 1;
                    // debugger;
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                    // swal({
                    //     title: "error!",
                    //     text: "You Failed to sign up",
                    //     icon: "error",
                    //     button: "ok!",
                    // });
                    swal({
                        title: "Good job!",
                        text: "you are in !",
                        icon: "success",
                        button: "ok!",
                    });
                });
            // debugger;
            //  this.changeSuccess();
            this.setState({ success: 1 });
            // this.setState( this.state );
            //  debugger;
        }
    }

    componentDidMount() {
        // debugger;
        this.setState(this.state);
    }

    changeSuccess = () => {
        //  debugger;
        this.setState({ success: 1 });
    }


    uploadPic1 = e => {
        // debugger;
        e.preventDefault();
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            //   debugger;
            // as a good practice, use a function to set state
            this.setState(() => ({
                pic1: reader.result,
            }));
        };
        reader.readAsDataURL(file);
        //  debugger;
    }


    change = e => {
        //   debugger;
        this.setState({ [e.target.name]: e.target.value });

        if (e.target.type === "number") {
            this.setState({ [e.target.name]: parseInt(e.target.value) });
        }

    };

    // handleChange = (e, { value }) => this.setState({ value })

    render() {
        //   debugger;
        if (this.state.success === 1) {
            return (
                <UserProfile {...this.state} />
            );
        }
        else {

            return (
                <div style={{ backgroundColor: "#fff9c4" }}>
                    <Header as='h2' color='green' textAlign='center' block>  Sign Up </Header>
                    <Form onSubmit={() => this.handleSubmit()}>
                        <br />
                        <Form.Field>
                            <Input type="email" icon='mail' iconPosition='left' name="userMail" placeholder="Please Enter Your Email..." required autoComplete="off" onChange={e => this.change(e)} />
                            <br />
                        </Form.Field>

                        <Form.Field>
                            <Input type="text" icon='user' iconPosition='left' name="userPrivateName" placeholder="Please Enter Your Private Name..." required autoComplete="off" onChange={e => this.change(e)} />
                        </Form.Field>

                        <Form.Field>
                            <Input type="text" icon='users' iconPosition='left' name="userFamiliyName" placeholder="Please Enter Your Familiy Name..." required autoComplete="off" onChange={e => this.change(e)} />
                        </Form.Field>

                        <Form.Field>
                            <Input type="number" icon='birthday' iconPosition='left' name="age" placeholder="Please Enter Your Age..." required min="18" step="1" autoComplete="off" onChange={e => this.change(e)} />
                        </Form.Field>

                        <Form.Field>
                            <Input type="password" icon='lock' iconPosition='left' name="password" placeholder="Enter password..." required autoComplete="off" onChange={e => this.change(e)} />
                        </Form.Field>

                        <Form.Field>
                            <select required name="gender" placeholder='Please Enter Your Gender...' onChange={e => this.change(e)}>
                                <option value="" disabled selected>Please Enter Your Gender...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="ItsComplicated">ItsComplicated</option>
                            </select>
                        </Form.Field>

                        <Form.Field>
                            <Header as='h4' color='black'> Upload Your Profile Picture
                            <Icon name='picture' color="grey" />
                            </Header>
                            <Input type="file" accept="image/*" placeholder="Please Enter Your Gender..." name="pic1" required onChange={e => this.uploadPic1(e)} /> <br />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I have read and agree to the Terms and Conditions and Privacy Policy' name="Accept" required onChange={() => this.changeTuggle("accept")} />
                            <a href="http://gad.oppenheimer.co.il/article,5.html" > (Click Here To Watch To See The Conditions )  </a>
                        </Form.Field>

                        <br />
                        <Button fluid color="green" type='submit'> Submit </Button>
                    </Form>

                    <br />

                </div>
            );
        }
    }
}

export default SignUp;

                // const GenderOptions = [
        //     {key: 'Male', value: 'Male', text: 'Male' },
        //     {key: 'Female', value: 'Female', text: 'Female' },
        //     {key: 'ItsComplicated', value: 'ItsComplicated', text: 'ItsComplicated' },
        // ]