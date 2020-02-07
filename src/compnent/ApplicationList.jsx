import React from 'react';
import AppThumbNail from './App-ThumbNail';

class ApplicationList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedApp: {},
        }
    }

    renderAppList(appStoreList, category) {
        if(appStoreList) {
            return ( appStoreList.map((application) => {
                const { name } = application;
                return (
                    <div className ="application-list-Link" >
                        <AppThumbNail key={name} appData={application} />
                    </div>
                )
            }))
        }
        return null
    }


    render() {
        const appStoreList = this.props.appListData;
        const category = this.props.category;
        return(
            <div className= "applciation-list-container">
                {this.renderAppList(appStoreList, category)}
            </div>
        )
    }
}

export default ApplicationList;
