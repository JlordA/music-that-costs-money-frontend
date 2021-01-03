import React from 'react'

class Album extends React.Component{

    render(){
        return(
            <>
            <p>Artist: {this.props.AlbumObject.artist} Title: {this.props.AlbumObject.title} Wants: {this.props.AlbumObject.wants}</p><button>Add To Favorties</button>
            </>
        )
    }
}


export default Album