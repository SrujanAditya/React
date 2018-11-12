import C from '../constants/index';

export const setSearchText = (text) => ({
    type : C.SET_SEARCHTEXT,
    payload : text
})

export const setSearchBy = (type) => ({
    type : C.SET_SEARCHBY,
    payload : type
})

export const setResultsFound = (value) => ({
    type : C.SET_RESULTSFOUND,
    payload : value
})

export const fetchAndSetData = (search,searchBy) => (dispatch) => {
    return fetch("http://react-cdp-api.herokuapp.com/movies?"
                + "search="+search
                + "&searchBy="+searchBy
                + "&limit=100")
        .then(response => response.json())
        .then(response => response.data)
        .then(response => {
            dispatch ({
                type : C.FETCH_SET_DATA,
                payload : response
            })
            dispatch ({
                type : C.SET_RESULTSFOUND,
                payload : response.length
            })
            dispatch(setSearchText(search));
            dispatch(setSearchBy(searchBy));
        })
        .catch(error => console.log('error is', error));
}

export const fetchAndSetMovieData = (id) => (dispatch) => {
    return fetch("http://react-cdp-api.herokuapp.com/movies/"+id)
        .then(response => response.json())
        .then(response => {
            dispatch ({
                type : C.FETCH_SET_MOVIE_DATA,
                payload : response
            })
            dispatch(fetchAndSetData(response.genres[0],"genres"));
        })
        .catch(error => console.log('error is', error));
}

export const updateMovies = (sortBy) => (dispatch,getState) => {
    return fetch("http://react-cdp-api.herokuapp.com/movies?" 
                + "sortBy=" + sortBy 
                + "&search=" + getState().searchText 
                + "&searchBy=" + getState().searchBy
                + "&limit=100&sortOrder=desc")
    .then(response => response.json())
    .then(response => response.data)
    .then(response => {
        dispatch ({
            type : C.FETCH_SET_DATA,
            payload : response
        })
        dispatch ({
            type : C.SET_RESULTSFOUND,
            payload : response.length
        })
    }).catch(error => console.log('error is', error));
}
