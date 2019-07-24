import React, { Component } from 'react';
import './App.css';
import CheckFireBase from './CheckFireBase';
import SetDataToFireStore from './SetDataToFireStore';

import WeAreSubMe from './WeAreSubMe.js';
import SignUp from './SignUp.js';
import UserProfile from './UserProfile.js';
import Chat from './Chat.js';
import FriendlySublet from './FriendlySublet.js';
import MapOneSublet from './MapOneSublet.js';
import ShowHistoryLike from './ShowHistoryLike.js';

import LikeHistory from './LikeHistory.js';

import SeeYouSoon from './SeeYouSoon.js';

import Publish from './Publish.js';
import SearchPage from './SearchPage.js';
import NiceToHave from './NiceToHave.js';
import NewLogIn from './NewLogIn.js';

import Filter from './Filter.js';
import CalFlex from "./CalFlex";
import FlexFilter from './FlexFilter.js';

import Analytics from './Analytics.js';
import Profile from './Profile.js';

import ShowResult from './ShowResult.js';
import LikedPosts from './LikedPosts.js';

import Data from './Data.js';
import MapContainer from './MapContainer';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Menu, Responsive } from 'semantic-ui-react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Arr: [],
      activeItem: '',
    }
  }

  change = e => {
    this.setState({ activeItem: e.target.value });
  };

  render() {

    return (
      <div>
 <div>
   
 </div>
        <Responsive  >
          <Menu inverted  fluid >
            &nbsp;
            <Menu.Item name= ' login ' active={this.state.activeItem === 'Profile'} onClick={e => this.change(e)} href="/NewLogIn" />
            <Menu.Item name='Publish' active={this.state.activeItem === 'Publish'} onClick={e => this.change(e)} href="/" /> &nbsp;
            <Menu.Item name='Search' active={this.state.activeItem === 'SearchPage'} onClick={e => this.change(e)} href="/SearchPage" /> &nbsp;
            <Menu.Item name='SubMe' active={this.state.activeItem === 'WeAreSubMe'} onClick={e => this.change(e)} href="/WeAreSubMe" />
            <Menu.Item name='Profile   ' active={this.state.activeItem === 'Profile'} onClick={e => this.change(e)} href="/UserProfile" />
          </Menu>
        </Responsive>

        <div>
          <Router>
            <div>
       
              {/* <Route path="/" component={ UserProfile {...this.props} } exact /> */}
              <Route path="/" component={Publish} exact />
              <Route path="/SearchPage" component={SearchPage} />

              <Route path="/NewLogIn" component={NewLogIn} />
              <Route path="/NiceToHave" component={NiceToHave} />
              <Route path="/WeAreSubMe" component={WeAreSubMe} />
              <Route path="/CheckFireBase" component={CheckFireBase} />
              <Route path="/SetDataToFireStore" component={SetDataToFireStore} />
              
              <Route path="/Filter" component={Filter} />
              <Route path="/CalFlex" component={CalFlex} />
              <Route path="/FlexFilter" component={FlexFilter} />

              <Route path="/Analytics" component={Analytics} />
              <Route path="/Profile" component={Profile} />
              <Route path="/FriendlySublet" component={FriendlySublet} />

              <Route path="/ShowResult" component={ShowResult} />
              <Route path="/LikedPosts" component={LikedPosts} />
              <Route path="/MapContainer" component={MapContainer} />
              <Route path="/Chat" component={Chat} />

              <Route path="/SignUp" component={SignUp} />
              <Route path="/UserProfile" component={UserProfile} />
              <Route path="/SeeYouSoon" component={SeeYouSoon} />
              <Route path="/Data" component={Data} />
              <Route path="/MapOneSublet" component={MapOneSublet} />
              <Route path="/LikeHistory" component={LikeHistory} />   
              <Route path="/ShowHistoryLike" component={ShowHistoryLike} />   

              


            </div>
          </Router>
        </div>

      </div>
    );
  }
}


export default App;


