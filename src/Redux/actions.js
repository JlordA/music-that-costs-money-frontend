import { GET_ALBUMS } from './actionTypes'

export function getAlbums(){
    return function(dispatch){
        fetch('http://localhost:3000/api/albums')
        .then(r => r.json())
        .then(arrayOfAlbums => {
            dispatch({ type: GET_ALBUMS, payload: arrayOfAlbums })
        })
    }
}