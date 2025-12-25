import React from 'react'

const Auth = ({children}) => {
    const isLoggedIn=localStorage.getItem("isLoggedIn")
    if(!isLoggedIn)
    {
        return<Navigate to ="/login" />

    }
    return children;
}

export default Auth