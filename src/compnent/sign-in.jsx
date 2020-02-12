import React from 'react';
import FormInput from './Form-input';
import  { Link } from 'react-router-dom';
import history from '../history';
import './sign-in.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.logInOutStatus(true);
      history.push("/AppStore");
    } else {
      this.props.logInOutStatus(false);
      history.push("/");
      alert("Invalid User Name or password");
    }

  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-and-sign-up">
        <div className='sign-in'>
          <h2>Visteon Developer Console</h2>
          <div>Welcome Developer
          Publish your apps and games with the Visteon developer console. Benefit from features that help you improve your app’s quality, engage your audience, earn revenue, and more.
          </div>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='username'
              type='username'
              handleChange={this.handleChange}
              value={this.state.username}
              label='username'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <div className='buttons'>
            <Link className="application-list-Link" to='/AppStore'
                    onClick = {this.handleSubmit} >
                    <button className= 'custom-button' type='submit'> Sign in </button>
                </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
