import { useState } from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const onLogin = (event) => {
        event.preventDefault();
        setUser({username, password});
    }

    return (
        <>
            <h3>Login</h3>
            <form method="post" onSubmit={(e)=>onLogin(e)}>
                <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login;