import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Log In</div>
    else return <div>Welcome {user.userName} {/*Since in login.jsx setUser was stored userName and password hence user was passed as an object */}</div> 
}

export default Profile