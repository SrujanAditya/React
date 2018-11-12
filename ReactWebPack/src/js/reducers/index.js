import { combineReducers } from 'redux';
import { fetchAndSetData, setSearchText, setSearchBy, fetchAndSetMovieData, setResultFound } from "./reducers";

export default combineReducers({
    data: fetchAndSetData,
    searchText: setSearchText,
    searchBy: setSearchBy,
    movieData: fetchAndSetMovieData,
    resultsFound: setResultFound
});