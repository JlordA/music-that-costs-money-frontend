import React from 'react'
import { getAlbums } from '../Redux/actions'
import { connect } from 'react-redux'

class MusicContainer extends React.Component{

    componentDidMount(){
        // fetch('http://localhost:3000/api/albums')
        // .then(r => r.json())
        // .then(console.log)
        this.props.fetchAlbums()
    }
    render(){
        console.log(this.props)
        return(
            <h1>Inside Music Container</h1>
        )
    }

}

function msp(state){
    return{ albums: state.albums }
}
function mdp(dispatch){
    return{
        fetchAlbums: () => dispatch(getAlbums())
    }
}

export default connect(msp, mdp)(MusicContainer)