import { GET_ALBUMS, FORMATTED_SEARCH, ADD_FAVORITE, POST_ALBUM, LOGIN_USER, CREATE_POST } from './actionTypes'

////// ALBUM ACTIONS //////

export function getAlbums() {
    return function (dispatch) {
        fetch('http://localhost:3000/api/albums')
            .then(r => r.json())
            .then(arrayOfAlbums => {
                dispatch({ type: GET_ALBUMS, payload: arrayOfAlbums })
            })
    }
}

export function formattedSearch(filteredArrayOfAlbums, dispatch) {
    let searchresults = filteredArrayOfAlbums.results.map(album => {
        let titleArray = album.title.split(" - ")
        let artist = titleArray[0]
        let albumTitle = titleArray[1]
        return {title: albumTitle, artist: artist, year: album.year, url: album.uri, thumb: album.thumb, wants: album.community.want}
    })
    
    { dispatch({ type: FORMATTED_SEARCH, payload: searchresults }) }
}

export function searchAlbums(e) {
    return function (dispatch) {
        fetch(`https://api.discogs.com/database/search?country=japan&genre=pop&style={city%20pop}&decade=1980&artist=${e}&page=1&per_page=100&token=` + process.env.REACT_APP_API_KEY)
            .then(r => r.json())
            .then(filteredArrayOfAlbums => {
                if(filteredArrayOfAlbums.results.length > 0){
                    formattedSearch(filteredArrayOfAlbums, dispatch)
                }
            })
    }
}

export function postAlbum(albumObj){
    return function (dispatch){
        fetch('http://localhost:3000/api/albums',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(albumObj),
          })
          .then(response => response.json())
          .then(newAlbumObject => {
            console.log(newAlbumObject) 
            dispatch ({ type: POST_ALBUM, payload: newAlbumObject })
        })
        }
}

///// POST ACTIONS /////
export function createPost(postObj){
    console.log(postObj)
    return function (dispatch){
        fetch('http://localhost:3000/api/posts',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postObj),
          })
          .then(response => response.json())
          .then(newPostObject => {
            console.log(newPostObject) 
            dispatch ({ type: CREATE_POST, payload: newPostObject })
        })
        }
} 

//// FAVORITE ACTIONS /////
export function addAlbumToFavorites(albumObj){
    return { type: ADD_FAVORITE, payload: albumObj }
}


///// USER ACTIONS //////

export function loginUser(userObj){
    return function (dispatch){
        fetch('http://localhost:3000/api/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
          })
          .then(response => response.json())
          .then(newUser => {
            console.log(newUser)
            dispatch ({ type: LOGIN_USER, payload: newUser})
          })
        }
}

export function createUser(userObj){
    return function (dispatch){
        fetch('http://localhost:3000/api/user',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
          })
          .then(response => response.json())
          .then(newUser => {
            console.log(newUser)
            dispatch ({ type: LOGIN_USER, payload: newUser})
          })
    }
}