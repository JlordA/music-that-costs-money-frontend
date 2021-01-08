import React from 'react'
import {connect} from 'react-redux'
import {searchAlbums} from '../../Redux/actions'

class SearchForm extends React.Component{
   
    state = {
        searchterm: ""
    }

    onSearch = (e) => {
        this.setState({ searchterm: e.target.value })
        this.props.filterAlbums(e.target.value)
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Search Albums by Artist" value={this.state.searchterm} onChange={this.onSearch}/>
            </form>
        )
    }
    
}

function mdp(dispatch) {
    return{
        filterAlbums: (e) => dispatch(searchAlbums(e))
    }
}

export default connect(null, mdp)(SearchForm)

