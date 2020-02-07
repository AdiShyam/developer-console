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
        name: '',
        url: '', //site url,
        developerName: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    debugger;
    console.log("this is the publish submit");
    history.push("/AppStore");
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

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
                name='name'
                type='name'
                handleChange={this.handleChange}
                value={this.state.name}
                label='name'
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
