import React from 'react'
import { getAlbums } from '../Redux/actions'
import { connect } from 'react-redux'
import Forum from '../Components/Forum'
import CreatePost from '../Components/CreatePost'
import TopAlbums from '../Components/TopAlbums'
import Favorties from '../Components/FavoritesList'
import Scroll from '../Components/Scroll'

class MusicContainer extends React.Component {

    componentDidMount() {
        // fetch('http://localhost:3000/api/albums')
        // .then(r => r.json())
        // .then(console.log)
        this.props.fetchAlbums()
    }
    render() {
        console.log(this.props)
        return (
            <div className="forumContainerDiv">
                <div className="forumDiv"><Forum /></div>
                <div className="createPostDiv"><CreatePost /></div>
                <div className="topAlbumDiv"><TopAlbums /></div>
                <div className="favortiesDiv"><Favorties /></div>
                <div className="scrollDiv"><Scroll /></div>
            </div>
        )
    }

}

function msp(state) {
    return { albums: state.albums }
}
function mdp(dispatch) {
    return {
        fetchAlbums: () => dispatch(getAlbums())
    }
}

export default connect(msp, mdp)(MusicContainer)