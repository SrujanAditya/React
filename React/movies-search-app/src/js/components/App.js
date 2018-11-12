import React from 'react';
import { Component } from 'react';
import '../css/App.css';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import MoviesList from '../ui/MoviesList';
import SubHeader from '../ui/SubHeader';
import {fetchAndSetData,updateMovies,fetchAndSetMovieData} from '../actions/Actions';
import {connect} from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props)
    window.scrollTo(0,0);
  }
  render(){
    return (
      <div>
        <Header fetchData={this.props.fetchAndSetData}/> 
        {(this.props.dataLength != 0) ? 
          <SubHeader resultsFound={this.props.resultsFound} updateMovies={this.props.updateMovies}/> 
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
  resultsFound : state.resultsFound,
  searchText : state.searchText,
  movies : state.data
})

export const mapDispatchToProps = {
  fetchAndSetData,
  updateMovies,
  fetchAndSetMovieData
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
