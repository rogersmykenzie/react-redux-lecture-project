import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsername = e => {
        this.setState({username: e.target.value});
    }
    handlePassword = e => {
        this.setState({password: e.target.value});
    }
    render() {
        return (
            <div>
                <input placeholder='Username' />
                <input placeholder='Password' type='password' />
                <Link to='/shows'>Log In</Link>
            </div>
        )
    }
}

export default Login;