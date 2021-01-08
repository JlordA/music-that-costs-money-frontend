import React from 'react'
import { getAlbums } from '../Redux/actions'
import { connect } from 'react-redux'
import Posts from '../Components/Forum/Posts'
import CreatePost from '../Components/Forum/CreatePost'
import TopAlbums from '../Components/Forum/TopAlbums'
import Favorties from '../Components/Forum/FavoritesList'
import Scroll from '../Components/Forum/Scroll'

class ForumContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAlbums()
    }
    render() {
        // console.log(this.props)
        return (
            <div className="forumContainerDiv">
                <div className="forumDiv"><Posts /></div>
                <div className="createPostDiv"><CreatePost /></div>
                <div className="topAlbumDiv"><TopAlbums /></div>
                <div className="favortiesDiv"><Favorties /></div>
                <div className="scrollDiv"><Scroll /></div>
            </div>
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
        fetchAlbums: () => dispatch(getAlbums())
    }
}

export default connect(msp, mdp)(ForumContainer)