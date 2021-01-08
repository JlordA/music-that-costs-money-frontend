import React from 'react'
import { connect } from 'react-redux'
import { addAlbumToFavorites } from '../../Redux/actions'
import { postAlbum } from '../../Redux/actions'

class Album extends React.Component {


    addToFavortie = () => {
        console.log("object from search fetch: ", this.props.AlbumObject)
        this.props.albums.map(albumEl => {
            if (albumEl.title === this.props.AlbumObject.title) {
                this.props.favorite(this.props.AlbumObject)
            } else {
                this.props.addAlbum(this.props.AlbumObject)
            }
        })
    }

    render(){
            return(
            <>
                <p>Artist: {this.props.AlbumObject.artist} Title: {this.props.AlbumObject.title} Wants: 
                {this.props.AlbumObject.wants}<button onClick={this.addToFavortie}>  ❤️  </button></p>
            </>
        )
    }
}

function msp(state) {
    return {
        albums: state.albums
    }
}

function mdp(dispatch) {
    return { 
        favorite: () => dispatch(addAlbumToFavorites()),
        addAlbum: () => dispatch(postAlbum()) 
    }
}

export default connect(msp, mdp)(Album)