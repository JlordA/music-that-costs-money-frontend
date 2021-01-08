import React from 'react'
import {connect} from 'react-redux'

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

export default connect()(LoginForm)