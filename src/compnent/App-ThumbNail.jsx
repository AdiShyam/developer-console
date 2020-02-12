import React from 'react';
import './App-ThumbNail.css'

class AppThumbNail extends React.Component {

    renderThumbNail = (appData) => {
        return (
        <div>
            <img className ="thumb-nail-image" src = {appData.icons[0].src} alt={appData.title}/>
        </div>)
    }
    
    render() {
        return(
            <div onClick= {this.handleClick} className ="thumb-nail-container">
                {this.renderThumbNail(this.props.appData)}
                <div className="thumb-nail-title">{this.props.appData.title}</div>
            </div>
        )
    }

}

export default AppThumbNail;
