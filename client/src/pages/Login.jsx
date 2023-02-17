import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Login</button>
                <p>There is an error!</p>
                <span>Don't have an account?<Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}
