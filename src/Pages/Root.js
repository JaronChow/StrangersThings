import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Root = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate();
    const logout  = () => {
        localStorage.removeItem('token')
        setToken('');
        navigate('/posts')
    }
    
    return (
        <div>
            <header>
                Stranger's Things
            </header>
            <nav className='nav'>
                <Link to='posts'>Posts</Link>
                {token && <Link to='profile'>Profile</Link>}
                {!token ? <Link to='register'>Register</Link> : ''}
                {!token ? <Link to='login'>Log In</Link> : ''}
                {token ? <button onClick={logout}>Logout</button> : ''}
            </nav>
            <main>
                <Outlet context={[token,setToken]}/>
            </main>
        </div>
    )
}

export default Root;