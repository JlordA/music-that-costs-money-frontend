import { combineReducers } from 'redux'

const defaultState = {
    albums: [],
    searchresults: [],
    favorites: []
}


function albumsReducer(prevState = defaultState.albums, action) {
    switch (action.type) {
        case "GET_ALBUMS":
            // console.log(action.payload)
            return action.payload
        case "POST_ALBUM":
            console.log(action.payload)
            return action.payload
        default:
            return prevState
    }
}

function searchReducer(prevState = defaultState.searchresults, action) {
    switch (action.type) {
        case "FORMATTED_SEARCH":
            return action.payload
        default:
            return prevState
    }
}

function favoriteReducer(prevState = defaultState.favorites, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            console.log("in API Reducer: ", action.payload)
            return [...prevState, action.payload]
        default:
            return prevState
    }
}

const rootReducer = combineReducers({
    albums: albumsReducer,
    searchresults: searchReducer,
    favorites: favoriteReducer
})

export default rootReducer