import React from 'react'
import { connect } from 'react-redux'
import { addAlbumToFavorites } from '../../Redux/actions'
import { postAlbum } from '../../Redux/actions'

class Album extends React.Component {


    addToFavorite = () => {
        if (this.props.albums.includes(this.props.AlbumObject)) {
            this.props.favorite(this.props.AlbumObject)
        } else {
            this.props.addAlbum(this.props.AlbumObject)
        }
    }

    render() {
        return (
            <>
                <p>Artist: {this.props.AlbumObject.artist} Title: {this.props.AlbumObject.title} Wants:
                {this.props.AlbumObject.wants}<button onClick={this.addToFavorite}>  ❤️  </button></p>
            </>
        )
    }
}

function msp(state) {
    return {
        albums: state.albums,
        searchresults: state.searchresults
    }
}

function mdp(dispatch) {
    return {
        favorite: (albumObj) => dispatch(addAlbumToFavorites(albumObj)),
        addAlbum: (albumObj) => dispatch(postAlbum(albumObj))
    }
}

export default connect(msp, mdp)(Album)