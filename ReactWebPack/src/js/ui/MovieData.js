import React from 'react';
import '../css/MovieData.css';

const MovieData = ({movieData,history}) => (
    <div className = "movieContainer">
        <div className="movieDataHeader">
            <label className = "netflixTextMovie" >netflixroulette</label>
            <button className= "searchButton" onClick={() => {history.replace("/")}} >SEARCH</button>
        </div>
        <div className="movieBody">
            <div className="movieImage">
                <img style={{width:'300px',borderRadius:'8px'}} src={movieData.poster_path} />
            </div>
            <div className="movieDesc">
                <table><tbody>
                    <tr>
                        <td>
                            <p className="movieName">{movieData.title}</p> 
                            <p className="tagline">{movieData.tagline}</p>
                        </td>
                        <td>
                            {(movieData.vote_average != "0")?<button className="ratingButton" style={{color:"white",fontSize:'20px'}}>{movieData.vote_average}</button>: ""} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span className="white">{movieData.release_date}</span>
                                <span className="white">{(movieData.runtime != null)? movieData.runtime + "min"  : ""}</span>
                            </div>
                        </td>
                    </tr>
                </tbody></table>
                <span className="overview">{movieData.overview}</span>
            </div>
            <div className="clear"></div>
        </div> 
    </div>  
)

export default MovieData;