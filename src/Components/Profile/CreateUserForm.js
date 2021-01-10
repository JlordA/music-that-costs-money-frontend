import React from 'react'
import { connect } from 'react-redux'

class CreateUserForm extends React.Component {

    state = {
        name: "",
        password: "",
        bio: "",
        image: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = () => {
        this.props.createUser(this.state)
    }
    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <input name="name" type="text" placeholder="username" value={this.state.name} onChange={this.changeHandler} />
                <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
                <input name="bio" type="text" placeholder="bio" value={this.state.bio} onChange={this.changeHandler} />
                <input name="image" type="text" placeholder="image" value={this.state.image} onChange={this.changeHandler} />
            </form>
        )
    }
}

function mdp(dispatch) {
    return {
        newuser: (userObj) => dispatch(createUser(userObj))
    }
}

export default connect(null, mdp)(CreateUserForm)
