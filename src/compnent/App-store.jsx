import React from 'react';
import ApplicationList from './ApplicationList';
import './App-store.css';

class AppStore extends React.Component {
 
    renderAppList = (appStoreObject) => {
        console.log("the data", appStoreObject);
        const containerDOM = [];
        debugger
        for (var category in appStoreObject) {
            // console.log("the category object is ", category);
            containerDOM.push(
                <div className="category-container-wrapper" key={category}>
                    <div className = "category-container-title thumb-nail-title">{category}</div>
                    <ApplicationList category = {category} appListData={appStoreObject[category]} />
                </div>
            );
        }
        return containerDOM;
    }

    render() {
        const appData = this.props.appStoreObject;
        debugger
        if (appData) {
            return (<div>
                {this.renderAppList(appData)}
            </div>)
        } else {
           return <div> Loading appList</div>
        }
        
    }
}

export default AppStore;