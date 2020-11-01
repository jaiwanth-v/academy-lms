import React, { Component } from 'react'
import './sub-components/ProfileSection/css/Profile.css'
import { signOut } from '../store/action/authActions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


export class Profile extends Component {
    render() {
        const { auth,profile } = this.props;
        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        return (
            <div className='routeArea profileSec'>
                <div className='profile-section'>
                    <div className='profile-set-information'>
                        <span className='profile-set-icon'>{profile.initials}</span>
                        <div className='profile-set-data'>
                        <span className='profile-set-data-Name'>{profile.firstName} {profile.lastName}</span>
                        <span className='profile-set-data-Email'><a className='email-text' href={'mailto:'+auth.email}>{auth.email}</a> - Student</span>
                        <span className='profile-set-data-Grade'>Grade {profile.grade}</span>
                        <button className='lighten-1 z-depth-0 signOut-btn' onClick={this.props.signOut}>Sign Out</button>
                        </div>
                    </div>
                    <div className='profile-update-information'>
                        <span className='forumTitle'>Account Information</span>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)