import React from 'react';
import MovieComp from './MovieComp';
import '../css/MovieList.css';


const MoviesList = ({movies,movieDes,history}) => (
    <div className="moviesContainer">
        {
            movies.map((movie, i) =>(
                <MovieComp key={i}
                        {...movie}
                        onClick={movieDes}
                        history = {history}
                        />
            )
        )}
    </div>
)

export default MoviesList;