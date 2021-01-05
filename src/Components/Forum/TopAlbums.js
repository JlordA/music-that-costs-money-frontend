import React from 'react'
import { connect } from 'react-redux'
import { searchAlbums } from '../../Redux/actions'
import Album from './Album'
import SearchForm from './SearchForm'


class TopAlbums extends React.Component {

    // state = {
    //     searchterm: ""
    // }

    // onSearch = (e) => {
    //     this.setState({ searchterm: e.target.value })
    //     this.props.filterAlbums(e.target.value)
    // }

    albums = () => {
        let size = 5
        if (this.props.albums) {
            return this.props.albums.sort((a, b) => a.wants > b.wants ? -1 : 1).slice(0, size).map(albumEl => {
                return <Album key={albumEl.id} AlbumObject={albumEl} />
            })
        } 
        else {
            let filteredArray = this.props.albums.filter(albumEl => albumEl.artist.toLowerCase().includes(this.state.searchterm.toLowerCase()))
            return filteredArray.map(albumEl => <Album key={albumEl.id} AlbumObject={albumEl} />)
        }

    }

    // filteredAlbums = () => {
    //     let filteredArray = this.props.albums.filter(albumEl => albumEl.artist.toLowerCase().includes(this.state.searchterm.toLowerCase()))
    //     return filteredArray.map(albumEl => <Album key={albumEl.id} AlbumObject={albumEl}/>)
    // }

    render() {
        console.log(this.props)
        return (
            <>
                <h1>Top 5 Albums</h1>
                <SearchForm />
                {/* {this.filteredAlbums()} */}
                {this.albums()}
            </>
        )

    }

}

function msp(state) {
    return { albums: state.albums }
}

// function mdp(dispatch) {
//     return {
//         filterAlbums: (e) => dispatch(searchAlbums(e))
//     }
// }

export default connect(msp)(TopAlbums)