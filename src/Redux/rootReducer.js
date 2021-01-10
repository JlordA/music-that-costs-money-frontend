import { combineReducers } from 'redux'

const defaultState = {
    albums: [],
    searchresults: [],
    favorites: [],
    user: null,
    posts: []
}


function albumsReducer(prevState = defaultState.albums, action) {
    switch (action.type) {
        case "GET_ALBUMS":
            // console.log(action.payload)
            return action.payload
        case "POST_ALBUM":
            // console.log("In API Reducer: ", action)
            return [...prevState, action.payload]
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
            // console.log("in API Reducer: ", action.payload)
            return [...prevState, action.payload]
        default:
            return prevState
    }
}

function userReducer(prevState = defaultState.user, action){
    switch (action.type) {
        case "LOGIN_USER":
            console.log("From userReducer: ", action.payload)
            return prevState
        case "CREATE_USER":
            console.log("From userReducer: ", action.payload)
            return prevState
        default:
            return prevState
    }
}

function postReducer(prevState = defaultState.posts, action){
    switch (action.type) {
        case "CREATE_POST":
            console.log("From postReducer: ", action.payload )
            return [...prevState, action.payload]
        default:
            return prevState
    }
}

const rootReducer = combineReducers({
    albums: albumsReducer,
    searchresults: searchReducer,
    favorites: favoriteReducer,
    user: userReducer,
    posts: postReducer
})

export default rootReducer