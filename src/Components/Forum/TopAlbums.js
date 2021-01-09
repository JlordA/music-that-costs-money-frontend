import React from 'react'
import { connect } from 'react-redux'
import Album from './Album'
import SearchForm from './SearchForm'


class TopAlbums extends React.Component {


    albums = () => {
        let size = 5
        if (this.props.searchresults.length > 0) {
            return this.props.searchresults.sort((a, b) => a.wants > b.wants ? -1 : 1).slice(0, size).map(albumEl => {
                return <Album key={albumEl.id} AlbumObject={albumEl} />})            
        } else  {
            return this.props.albums.sort((a, b) => a.wants > b.wants ? -1 : 1).slice(0, size).map(albumEl => {
                return <Album key={albumEl.id} AlbumObject={albumEl} />})
            }
    }

    // albums = () => {
    //     let size = 5
    //     if (this.props.albums) {
    //         return this.props.albums.sort((a, b) => a.wants > b.wants ? -1 : 1).slice(0, size).map(albumEl => {
    //             return <Album key={albumEl.id} AlbumObject={albumEl} />})
    //     } else {
    //         let filteredArray = this.props.searchresults.filter(albumEl => albumEl.artist.toLowerCase().includes(this.state.searchterm.toLowerCase()))
    //         console.log(filteredArray)
    //         return filteredArray.map(albumEl => <Album key={albumEl.id} AlbumObject={albumEl} />)
    //         }
    // }

    render() {
        // console.log(this.props.searchresults)
        return (
            <>
                <h1>Top 5 Albums</h1>
                <SearchForm />
                {this.albums()}
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

export default connect(msp)(TopAlbums)