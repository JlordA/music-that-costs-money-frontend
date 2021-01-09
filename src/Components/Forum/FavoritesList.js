import React from 'react'
import { connect } from 'react-redux'
import Album from '../Forum/Album'

class Favorites extends React.Component{

    renderfavorites = () => {
        console.log(this.props.favorites)
        return this.props.favorites.map(albumEl => {
            return <Album key={albumEl.id} AlbumObject={albumEl} />
        })
        
    }

    render(){

        return(
            <>
            <h1>Favorites List</h1>
            {this.renderfavorites()}
            </>
            )
    }
        
}

function msp(state){
    return{
        favorites: state.favorites
    }
}

export default connect(msp)(Favorites)