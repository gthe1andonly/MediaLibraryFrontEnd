import Box from '@mui/material/Box';
import { Button, Container, Paper, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { register } from '../actions/userActions';


export default function Register() {
    const paperStyle={padding:'50px 20px',  width:600, margin:"20px"};
    // We initialize the username variable to be managed by the setUserName function within this component
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    // For now I will check the password similarity in the handle register function.
    // There's likely a better way to do this. Hopefully I get back to it.
    // Once I will send and API request to the backend. I am not yet sure if these get sent as plain text over http
    // If that is the case, I will need to research what best practices are for sending passwords for API requests.
    // const handleRegister = (e) => {
    //     const userInfo = {username, email, password, repeatPassword}
    //     if (password !== repeatPassword) {
    //         throw new Error("Passwords do not match");
    //     }
    //     else{
    //         fetch("http://localhost:8080/register/save", 
    //         {
    //             method:"POST",
    //             headers:{"Content-Type":"application/json"},
    //             body:JSON.stringify(userInfo)
    //         }).then(()=> {
    //             console.log("%s has been registered",username)
    //         })
    //     }
    // }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1 },}}
                noValidate
                autoComplete="off">
                    <h1 style={{color:"navy"}}>Welcome to the registration page.</h1>
                    <TextField id="outlined-basic" label="username" variant='outlined' fullWidth value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <TextField id="outlined-basic" type="email" label="email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" type="password" label="password" variant='outlined' fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" type="password" label="repeatPassword" variant='outlined' fullWidth value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
                    <Button variant='contained' onClick={handleRegister}>Register</Button>
                </Box>
            </Paper>
        </Container>
    );
}