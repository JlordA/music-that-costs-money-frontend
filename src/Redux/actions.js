import { GET_ALBUMS, FORMATTED_SEARCH, ADD_FAVORITE, POST_ALBUM } from './actionTypes'


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

export function addAlbumToFavorites(albumObj){
    return { type: ADD_FAVORITE, payload: albumObj }
}

// 