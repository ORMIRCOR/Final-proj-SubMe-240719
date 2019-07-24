import React, { Component } from 'react';
import { Card, Icon, Image, Modal, Button, Header } from 'semantic-ui-react';
import RouteButton from './RouteButton.js';
import NewLogIn from './NewLogIn.js';
import { RouteButtonNotFulied } from './RouteButton.js';


const ProfileCard = (details) => (

    <Card fluid centered color="violet"  >
        <br />
        <br />
        <br />

        <Image src={details.pic1} size='big' centered  />
        <Card.Content>

            <Card.Header> <p> {details.userPrivateName}  {details.userFamiliyName} </p> </Card.Header>
            <Card.Meta>
                {
                    details.gender === "Female" && <p>  <Icon name='venus' /> {details.gender}      </p>
                }
                {
                    details.gender === "Male" && <p>  <Icon name='mars' /> {details.gender}      </p>
                }
                {
                    details.gender === "ItsComplicated" && <p>  <Icon name='transgender alternate' /> {details.gender}      </p>
                }
            </Card.Meta>
            <Card.Meta>
                <span className='date'> Age: {details.age}  </span> <br />
                <p>  <Icon name='mail' /> {details.userMail}      </p>
            </Card.Meta>
            <Card.Description>

            </Card.Description>
        </Card.Content>

        <Card.Content extra>

            <Modal trigger={<Button fluid color='blue' >  Log Out ! </Button>} closeIcon>
                <Header content='Log Out' />
                <Modal.Content>
                    <div>
                        <p>
                            Are you Sure do You Want To Exit ?
                </p>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <RouteButton value="Yes I Want To Log-Out" pathname="/SeeYouSoon" />
                </Modal.Actions>
                <Modal.Content>
                    <div style={{ textAlign: "center" }}>
                        <Image src='data:image/jpeg;base64,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' size='medium' />
                    </div>
                </Modal.Content>
            </Modal>
        </Card.Content>
    </Card>
)

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: this.props,
        }
    };
    render() {
       // debugger;

        var Userlocalstorage = JSON.parse(localStorage.getItem('UserObjectLoggedIn'));
        if (Userlocalstorage === null) {
            return (
                <div>
                  <NewLogIn />
                </div>
            )
        }
        else{
               return (
            <div style={{ backgroundColor: "#C8E6C9" }} >
                {/* {ProfileCard(this.state.details)} */}
                < RouteButtonNotFulied value="View Sublets that i liked" pathname="/LikeHistory" state={1}  />
                {ProfileCard(Userlocalstorage)}
            </div>
        );
        }
    }
}

export default UserProfile;