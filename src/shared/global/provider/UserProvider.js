import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = (props) =>{
    const [authenticatedUser, setauthenticatedUser] = useState()

    return(
        <UserContext.Provider value={[authenticatedUser, setauthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
    )
}