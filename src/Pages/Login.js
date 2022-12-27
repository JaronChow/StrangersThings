import { useState, useEffect } from "react";
import { loginUser } from "../util/API";
import { useOutletContext, useNavigate } from "react-router-dom";


const Login  = () => {
    const[token, setToken] = useOutletContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if(token){
            return navigate('/profile')
        }
    },[token, navigate])


    async function submitForm (event) {
        event.preventDefault();
        if (!username){
            setErrorMessage("Please enter Username");
        }else if (!password){
            setErrorMessage("Incorrect Passsword")
        }else {
            setErrorMessage('');
            const user = {
                user: {
                    username:username,
                    password:password
                }
            }
            const response = await loginUser(user);
            console.log(response);
            if (response.error){
                setErrorMessage(response.error.message)
            }else {
                localStorage.setItem('token', response.data.token)
                setToken(response.data.token)
            }
        }
        setUsername('');
        setPassword('');
    }
    return (
    <div className = 'loginbox'>   
    <section className ="login">    
        <h1 className = 'title'> Log In </h1>
        <form className = 'loginform' onSubmit={submitForm}>
            <label>Username</label>
            <input 
                type="text" 
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <label>Password</label>
            <input 
                type="password" 
                value={password} 
                onChange={event => setPassword(event.target.value)}
            />
            <button type="submit" onChange={event => (event.target.value)}>Login</button>
            <p>{errorMessage}</p>
        </form>
    </section>
    </div>
    )
}

export default Login;