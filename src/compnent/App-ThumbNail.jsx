import React from 'react';
import './App-ThumbNail.css'

class AppThumbNail extends React.Component {

    renderThumbNail = (appData) => {
        return (
        <div>
            <img className ="thumb-nail-image" src = {appData.image} alt={appData.name}/>    
        </div>)
    }
    
    render() {
        return(
            <div onClick= {this.handleClick} className ="thumb-nail-container">
                {this.renderThumbNail(this.props.appData)}
                <div className="thumb-nail-title">{this.props.appData.name}</div>
            </div>
        )
    }

}

export default AppThumbNail;
