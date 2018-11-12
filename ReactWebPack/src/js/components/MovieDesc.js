import React from 'react';
import { Component } from 'react';
import MovieData from '../ui/MovieData';
import MoviesList from '../ui/MoviesList';
import MovieSubHeader from '../ui/MovieSubHeader';
import Footer from '../ui/Footer';
import {fetchAndSetMovieData} from '../actions/Actions';
import {connect} from 'react-redux';
import '../css/App.css'

export class MovieDesc extends Component {
    constructor(props) {
        super(props);
        this.props.fetchAndSetMovieData(props.match.params.id);
        window.scrollTo(0,0);
    }
    getSnapshotBeforeUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            return this.props
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot !== null && snapshot.match.params.id) {
            this.props.fetchAndSetMovieData(snapshot.match.params.id);
            window.scrollTo(0,0);
        }
    } 
    render(){
        return (
            <div>
                <MovieData movieData={this.props.movieData} history={this.props.history}/> 
                {(this.props.movieDataLength != 0) ? 
                    <MovieSubHeader searchText={this.props.searchText}/> 
                    : null 
                }
                {(this.props.dataLength != 0) ? 
                    <MoviesList movies={this.props.movies} movieDes={this.props.fetchAndSetMovieData} history={this.props.history}/>
                    : <div className="noFilms">No Films Found</div>
                }
                <Footer /> 
            </div>
        )
    }
}

export const mapStateToProps = state =>({
    dataLength : state.data.length,
    movieDataLength : state.movieData.length,
    movieData : state.movieData,
    searchText : state.searchText,
    movies : state.data
})

export const mapDispatchToProps = {
    fetchAndSetMovieData
};
  
export default connect(mapStateToProps,mapDispatchToProps)(MovieDesc);
