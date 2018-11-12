import C from '../constants/index';

export const fetchAndSetData = (state=[],action) => 
    (action.type === C.FETCH_SET_DATA) ? 
        action.payload :
        state

export const setSearchText = (state="",action) =>
    (action.type === C.SET_SEARCHTEXT) ?
        action.payload :
        state

export const setSearchBy = (state="title",action) =>
    (action.type === C.SET_SEARCHBY) ?
        action.payload :
        state

export const setResultFound =(state=null,action) =>
    (action.type === C.SET_RESULTSFOUND) ?
        action.payload :
        state

export const fetchAndSetMovieData = (state=[],action) => 
    (action.type === C.FETCH_SET_MOVIE_DATA) ?
        action.payload :
        state

export const UpdateMovies = (state=[],action) => 
    (action.type === C.UPDATE_MOVIES) ?
        action.payload :
        state



