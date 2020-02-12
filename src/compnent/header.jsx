import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import history from '../history';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: false
    }
  }

  handleLogOut = () => {
    this.setState({ currentUser: false });
    this.props.isLogIn(false);
    history.push("/");
  }

  renderLoginStatusButton = (loginStuats) => {
    if (loginStuats) {
      return (
        <div to='/' className='option' onClick={this.handleLogOut}>
          Sign Out
      </div>)
    } else {
      return (
        <div className='option'>
          Sign In
      </div>)
    }
  }

  render() {
    console.log("the props are ", this.props);
    return (
      <div className='header'>
        <div className='options'>
          <div className="header-container-wrapper">
            <Link className='option' to={(this.props.logInStatus) ? '/AppStore' : '/'}>
                App Store
            </Link>
            <Link className='option' to={(this.props.logInStatus) ? '/Publish' : '/'}>
                Publish
            </Link>
          </div>
          <div className="header-log-wrapper">
            {this.renderLoginStatusButton(this.props.logInStatus)}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
