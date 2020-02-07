import React from 'react';
import faker from 'faker';
import './App.css';
import SignIn from './sign-in';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import AppStore from './App-store';
import history from '../history';
import Publish from './Publish';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appStoreList: [],
      appStoreObject: {},
      applicationSelected: {},
      logInStatus: false
    }
  }
  
  handleSelectedApp () {
    console.log("click happened");
  }
  componentDidMount() {
    let appStoreList = [];
    const appStoreObject = {};
    const applciationCategory = [ "Social", "Music & Video", "Travel", "Tools", "Games", "Shopping" , "Photos", "Reading", "Sports & Health", "Education"];
    applciationCategory.forEach(category => {
      let randomNumber = Math.floor(Math.random() * 20) + 1;
      appStoreList = [];
      for (let i=0; i<randomNumber; i++) {
          let application = {};
          application.ispwa = true;
          application.title = faker.name.title();
          application.image = faker.image.avatar();
          application.installationState = Boolean(Math.round(Math.random()));
          application.description = faker.lorem.paragraphs();
          application.developerName = faker.name.findName()
          appStoreList.push(application);
      }
      appStoreObject[category] = appStoreList;
    });
    this.setState({ appStoreObject, appStoreList });
  }

  handleLogInOut = ( logInStatus )=> {
    debugger;
    this.setState({ logInStatus })
  }

  render() {
    return (
      <div>
        <Router history = {history} >
        <Header isLogIn={this.state.logInStatus} >Header Content</Header>
          <Switch>
            <Route exact path='/AppStore' render={() => <AppStore appStoreObject={this.state.appStoreObject} selectedApp = {this.handleSelectedApp} />} />
            <Route exact path='/publish' component={Publish} />
            <Route  path='/' render={() => <SignIn logInOutStatus ={this.handleLogInOut} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
