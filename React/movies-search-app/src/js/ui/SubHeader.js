import React, {Component} from 'react';
import '../css/SubHeader.css';

class SubHeader extends Component{ 
    constructor(props) {
        super(props);
        this.dateColor="grey";
        this.ratingColor="grey";
    }
    changeDateColor = () => {
        this.dateColor="red";
        this.ratingColor="grey";
        this.onSubmit();
        this.forceUpdate();
    }
    changeRatingColor = () => {
        this.dateColor="grey";
        this.ratingColor = "red";
        this.onSubmit();
        this.forceUpdate();
    }
    onSubmit = () => {
        var choice = (this.dateColor == "red") ? "release_date" : "vote_average";
        this.props.updateMovies(choice);
    }
    render() {
        return (
            <div className = "subheader">
                <div className = "contentAlign">
                    {this.props.resultsFound} Movies Found
                    <div style={{display:'inline',float:'right'}}>
                        <label className = "innerText">Sort by:</label>
                        <button id = "release_date" className = "innerText" 
                            style={{color:this.dateColor}}
                            onClick={this.changeDateColor}>release date</button>
                        <button id = "rating" className = "innerText" 
                            style={{color:this.ratingColor}}
                            onClick={this.changeRatingColor}>rating</button>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default SubHeader;