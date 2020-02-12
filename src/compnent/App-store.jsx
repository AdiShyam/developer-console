import React from 'react';
import ApplicationList from './ApplicationList';
import './App-store.css';

class AppStore extends React.Component {
 
    renderAppList = (appStoreObject) => {
        console.log("the data", appStoreObject);
        const categoryList = Object.keys(appStoreObject);
        let containerDOM =[]
        for(let i =0; i<categoryList.length; i++) {
            let category = categoryList[i];
            containerDOM.push(
            <div className="category-container-wrapper" key={category}>
                <div className = "category-container-title thumb-nail-title">{category}</div>
                <ApplicationList category = {category} appListData={appStoreObject[category]} />
            </div>)
        }
        return containerDOM;
    }

    render() {
        const appData = this.props.appStoreObject;
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