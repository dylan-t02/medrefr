import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router'
import JSONDebugger from '../utils/JSONDebugger'

// referral components
import EditableReferralList from './EditableReferralList'
import AddReferral from './AddReferral'

const style = {
    margin: '20px',
    backgroundColor: 'blue'
}

class ReferralDashboard extends Component {
    render(){
        return(
            <App> 
                <br/>
                <div className="border color-purple"  style={style}>
                    <h1>Thi is the REFERRAL DASHBOARD Component</h1>
                    <h4>This DISPLAYS the various parts of the dashboard</h4>
                    <EditableReferralList />
                    <AddReferral />
                </div> 
            </App> 
        )
    }
}

export default ReferralDashboard

