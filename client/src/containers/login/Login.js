import { React, useRef } from 'react'
import "./login.css"
import { FormControl, InputLabel, Input, Button } from '@mui/material';
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router';


const Login = () => {

    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef()
    const { login } = useAuth()
    console.log(login)

    const onSubmit = (e) => {
        e.preventDefault()
        login(emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate("/forms")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
    }

    console.log()


    return (
        <div className="login">
            <form onSubmit={onSubmit} className='login-form'>
                <FormControl>
                    <InputLabel htmlFor="my-input">Login</InputLabel>
                    <Input id="my-input" type="email" required inputRef={emailRef} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password">Hasło</InputLabel>
                    <Input id="password" type="password" inputRef={passwordRef} required />
                </FormControl>
                <Button type="submit" variant="contained">Login</Button>
            </form>
        </div>
    )
}

export default Login
