import React from 'react'
import Bio from '../Components/Profile/Bio'
import ProfileImage from '../Components/Profile/Image'

class Profile extends React.Component{

    render(){

        return(
            <div className="profileDiv">
                <div className="profileImageDiv"><ProfileImage /></div>
                <div className="profileBioDiv"><Bio /></div>
                <div></div>
            </div>
        )
    }
}

export default Profile