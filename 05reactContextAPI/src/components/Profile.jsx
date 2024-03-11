import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);

    if(!user) return <h2 className='text-danger'>Please Logged-in first!</h2>

    return <h2>Welcome home, {user.username}!</h2>
}

export default Profile;