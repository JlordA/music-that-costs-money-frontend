import React from 'react'

class LoginForm extends React.Component{

    render(){

        return(
            <form>
                <input placeholder="username" type="text" />
                <input placeholder="password" type="text" />
            </form>
        )
    }
}

export default LoginForm