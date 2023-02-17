import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="username"></input>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Register</button>
                <p>There is an error!</p>
                <span>Do you have an account?<Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}
