import React from 'react'
import {connect} from 'react-redux'
import { loginUser } from '../../Redux/actions'

class LoginForm extends React.Component{

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.user(this.state)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                Username:<input name="username" placeholder="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                Password:<input name="password" placeholder="password" type="text" value={this.state.password} onChange={this.handleChange}/>
                <button>Login</button>
            </form>
        )
    }
}

function mdp(dispatch){
    return{
        user: (userObj) => dispatch(loginUser(userObj))
    }
}

export default connect(null, mdp)(LoginForm)