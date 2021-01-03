import React from 'react'
import {connect} from 'react-redux'
import Album from './Album'


class TopAlbums extends React.Component{

    albums = () => {
        let size = 5
        // let sortedArray = this.props.albums.sort((a, b) => a.albumEl.wants > b.albumEl.wants)
        return this.props.albums.sort((a, b) => a.wants > b.wants ? -1 : 1).slice(0, size).map(albumEl => {
            return <Album key={albumEl.id} AlbumObject={albumEl}/>
        })
    }

    render(){
        console.log(this.props)
        return(
            <>
            <h1>Top Albums</h1>
            {this.albums()}
            </>
        )

    }

}

function msp(state) {
    return { albums: state.albums }
}

export default connect(msp)(TopAlbums)