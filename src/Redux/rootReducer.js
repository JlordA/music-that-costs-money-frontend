import { combineReducers } from 'redux'

const defaultState = {
    albums: []
}


function albumsReducer(prevState = defaultState.albums, action){
    switch (action.type) {
        case "GET_ALBUMS":
            // console.log(action.payload)
            return action.payload
        case "SEARCH_ALBUMS":
            console.log("in API Reducer: ", action )
            return action.payload.results
        default:
            return prevState
    }
}

const rootReducer = combineReducers({
    albums: albumsReducer
})

export default rootReducer