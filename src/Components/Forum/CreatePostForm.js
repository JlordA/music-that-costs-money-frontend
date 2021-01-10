import React from 'react'
import {connect} from 'react-redux'
import {createPost} from '../../Redux/actions'

class CreatePostForm extends React.Component{


    state = {
        title: "",
        body: "Add to the Forum",
        price: "",
        like: 0,
        for_sale: false
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onCheck = () => {
        this.setState({ for_sale: !this.state.for_sale})
    }

    submitHandler = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.post(this.state)
    }

    render(){
        console.log(this.state.for_sale)
        return (
            <>
                <h1>Create a Post</h1>
                <form onSubmit={this.submitHandler}>
                    <p>Title:</p>
                    <input name="title" type="text" placeholder="title" value={this.state.title} onChange={this.changeHandler}/>
                    <p>Body:</p>
                    <textarea name="body" type="text" value={this.state.body} onChange={this.changeHandler} />
                    <input name="price" type="number" placeholder="price" value={this.state.price} onChange={this.changeHandler}/>
                    <p>For Sale:<input name="for_sale" type="checkbox" checked={this.state.for_sale} onChange={this.onCheck}/></p>
                    <button>Post</button>
                </form>
            </>
        )
    }
}

function mdp(dispatch){
    return{
        post: (e) => dispatch(createPost(e))
    }
}

export default connect(null, mdp)(CreatePostForm)
