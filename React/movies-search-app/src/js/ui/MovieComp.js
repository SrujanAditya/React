import React from 'react';
import '../css/MovieComp.css';

const MovieComp = ({poster_path,id,title,genres,release_date,onClick,history}) => (
    <div className = "movieBlock" 
        onClick = {() => {
                    history.push("/movie/"+id);
                    onClick(id);
                }
            }>
        <img style={{width:'300px',borderRadius:'8px'}} src={poster_path} alt={title}/> 
        <div className="labelContainer">
            <label className="movieTitle">{title}</label>
            <label className="movieGenres">{genres.join(" & ")}</label>
        </div>
        <label className="releaseYear">{release_date.split("-")[0]}</label>
    </div>
)

export default MovieComp;