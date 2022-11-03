import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    const login = (email, password) => {
        console.log()
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = { currentUser, login }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
