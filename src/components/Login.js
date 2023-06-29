

export default function Login(){
    const paperStyle={padding:'50px 20px',  width:600, margin:"20px"};
    // We initialize the username variable to be managed by the setUserName function within this component
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        const userInfo = {username, password}
            fetch("http://localhost:8080/login/save", 
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(userInfo)
            }).then(()=> {
                console.log("%s has been registered",username)
            })
    }

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
                    <TextField id="outlined-basic" type="password" label="password" variant='outlined' fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button variant='contained' onClick={handleLogin}>Register</Button>
                </Box>
            </Paper>
        </Container>
    );
}