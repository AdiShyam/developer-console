import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   currentUser: 
    // }
  }

  handleClick = () => {
    // const status = !this.props.isLogIn;
    debugger;
    // this.setState({currentUser: status})
    console.log("logOut clicked");
  }

  render() {
    debugger;
    console.log("the props are ", this.props);
    return (
      <div className='header'>
        <div className='options'>
          <Link className='option' to='/'>
            App Store
      </Link>
          <Link className='option' to='/Publish'>
            Publish
      </Link>
          {this.props.isLogIn ? (
            <Link to='/' className='option' onClick={this.handleClick}>
              SIGN OUT
        </Link>
          ) : (
              <Link className='option' to='/publish'>
                SIGN In
        </Link>
            )}
        </div>
      </div>
    );
  }
}

export default Header;
