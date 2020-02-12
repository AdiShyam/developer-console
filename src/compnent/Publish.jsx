import React from 'react';
import FormInput from './Form-input';
import history from '../history';

class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        category: '',
        iconUrl: '',
        isInstalled: '',
        description: '',
        title: '',
        url: '', //site url,
        developerName: "",
        appUrl: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    var data = {
      appid: 123,
      title: this.state.title,
      url: "https://www.trivago.in/",
      icons: [
        {
          "src": "https://d3frsattnbx5l6.cloudfront.net/1532688811564-trivago-apple-touch-icon.png"
        }
      ],
      isPwa: true,
      description: "Every month 120+ million visitors use trivago to search & compare hotel prices, read reviews & browse photos. Find your ideal hotel deal on trivago.com",
      developerName: this.state.developerName,
      installationState: "installed",
      genres: this.state.category
    }

    let url = "http://136.18.212.65:6555/v1/updates";
    let response =  this.postData(url, data);
    console.log("the response is successful", response);
    response.then(()=> {
      history.push("/AppStore");
    }).catch((e) => {
      console.log("the error is", e);
    })
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  postData = async(url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  render() {
    return (
      <div className="sign-in-and-sign-up">
        <div className='sign-in'>
            <h2>Publish An app</h2>       

            <form onSubmit={this.handleSubmit}>
            <FormInput
                name='category'
                type='category'
                handleChange={this.handleChange}
                value={this.state.category}
                label='category'
                required
            />
            <FormInput
                name='title'
                type='title'
                handleChange={this.handleChange}
                value={this.state.title}
                label='title'
                required
            />
            <FormInput
                name='description'
                type='description'
                handleChange={this.handleChange}
                value={this.state.description}
                label='description'
                required
            />
            <FormInput
                name='iconUrl'
                type='iconUrl'
                handleChange={this.handleChange}
                value={this.state.iconUrl}
                label='iconUrl'
                required
            />
            <FormInput
                name='appUrl'
                type='appUrl'
                handleChange={this.handleChange}
                value={this.state.appUrl}
                label='appUrl'
                required
            />
            <FormInput
                name='developerName'
                type='developerName'
                handleChange={this.handleChange}
                value={this.state.developerName}
                label='developerName'
                required
            />
            <div className='buttons'>
                <button className= 'custom-button' type='submit'> Publish </button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

export default Publish;
