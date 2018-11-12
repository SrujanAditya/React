import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component{ 
    constructor(props) {
        super(props);
        this.searchText="";
        this.searchBy="title";
        this.bgColorTitle="red";
        this.bgColorGenre="grey";
    }
    changeSearchByTitle = () => {
        this.bgColorTitle="red";
        this.bgColorGenre="grey";
        this.searchBy="title";
        this.forceUpdate();
    }
    changeSearchByGenre = () => {
        this.bgColorTitle="grey";
        this.bgColorGenre="red";
        this.searchBy="genres";
        this.forceUpdate();
    }
    searchTextChange = () => this.searchText=this.searchValue.value;
    onSubmit = () => this.props.fetchData(this.searchText,this.searchBy);
    checkEnter = (e) => {
        if(e.key === "Enter"){
            this.onSubmit();
        }
    }
    render() {
        return (
            <div className="mainHeader">
                <div className = "headContainer">
                    <label className = "netflixText" >netflixroulette</label>
                    <label className = "label" >FIND YOUR MOVIE</label>
                    <input className = "searchBox" type="text" placeholder=" Search" 
                            onChange = {this.searchTextChange}
                            onKeyPress={this.checkEnter}
                            ref={(input) => this.searchValue = input} />  
                    <div  style={{display:'inline-block',width:'100%',margin:'5px 0px'}}>
                        <div style={{display:'inline'}}>
                            <label className = "label searchByText">SEARCH BY </label>
                            <button id = "titleBtn" className = "searchByButtons" 
                                    onClick={this.changeSearchByTitle}
                                    style={{backgroundColor:this.bgColorTitle}}>TITLE</button>
                            <button id = "genreBtn" className = "searchByButtons" 
                                    onClick = {this.changeSearchByGenre}
                                    style={{backgroundColor:this.bgColorGenre}}>GENRE</button>
                        </div>
                        <div style={{display:'inline'}}>
                            <button className= "searchButton" 
                                    onClick={this.onSubmit}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;