import { GET_ALBUMS, SEARCH_ALBUMS } from './actionTypes'



export function getAlbums(){
    return function(dispatch){
        fetch('http://localhost:3000/api/albums')
        .then(r => r.json())
        .then(arrayOfAlbums => {
            dispatch({ type: GET_ALBUMS, payload: arrayOfAlbums })
        })
    }
}

export function searchAlbums(e){
    console.log(e)
    return function(dispatch){
        fetch(`https://api.discogs.com/database/search?country=japan&genre=pop&style={city%20pop}&decade=1980&artist=${e}&token=` + process.env.REACT_APP_API_KEY)
        .then(r => r.json())
        .then(filteredArrayOfAlbums => {
            dispatch({ type: SEARCH_ALBUMS, payload: filteredArrayOfAlbums })
        }
        )
    }
}



