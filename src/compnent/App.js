import React from 'react';
import './App.css';
import SignIn from './sign-in';
import { Switch, Route, Router } from 'react-router-dom';
import AppStore from './App-store';
import history from '../history';
import Publish from './Publish';
import Header from './header';
import data from "./data";
import { getData } from '../APIs/jsonPlaceHolder';

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

  componentDidMount = async() => {
    let response = await getData("https://appstore-backend-dot-appstore-viscloud.appspot.com/v1/list?categories=All"); //rajesh IP
    console.log("the respose issssssssss", response);
    let applicationMap = new Map();
    const appStoreObject = {};
    let applicationList = response;
    if (applicationList === undefined) {
      console.log("No data fetched from server loading stub data");
      applicationList = data;
    }
    let mapvalue =[];
    for (let i = 0; i < applicationList.length; i++) {
      if (applicationMap.has(applicationList[i].genres)) {
          mapvalue = applicationMap.get(applicationList[i].genres);
          mapvalue.push(applicationList[i]);
        applicationMap.set(applicationList[i].genres, mapvalue)
      } else {
        applicationMap.set(applicationList[i].genres, [applicationList[i]]);
      }
    }

    for (let [key, value] of applicationMap) {
      appStoreObject[key] = value;
    }

    this.setState({ appStoreObject });
  }

  handleLogInOut = ( logInStatus )=> {
    this.setState({ logInStatus })
  }

  render() {
    return (
        <Router history = {history} >
        <Header logInStatus={this.state.logInStatus} isLogIn={this.handleLogInOut} >Header Content</Header>
          <Switch>
            <Route exact path='/AppStore' render={() => <AppStore appStoreObject={this.state.appStoreObject} />} />
            <Route exact path='/publish' component={Publish} />
            <Route  path='/' render={() => <SignIn logInOutStatus ={this.handleLogInOut} />} />
          </Switch>
        </Router>
    );
  }
}

export default App;
