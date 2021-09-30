import React ,{useState, useContext} from 'react'
import {UserContext} from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const SignInView = () =>{
    const history = useHistory()
    const [username, setUsername] = useState()
    const [password, setpassword] = useState()
    const [authenticatedUser, setauthenticatedUser] = useContext(UserContext)

    const login = () => {
        setauthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push('/')
    }

    return(
        <div>
           <span>Username:</span> <input onChange={event => setUsername(event.target.value)}/><br />
           <span>Password:</span> <input type="password" onChange={event => setpassword(event.target.value)}/><br />
           <button onClick={()=>login()}>Login</button>
        </div>
    )
}