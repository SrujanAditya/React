import React from 'react';
import '../css/SubHeader.css';

const MovieSubHeader = ({searchText}) => (
    <div className = "subheader">
        <div className = "contentAlign">
            Films by {searchText} genre
        </div>
    </div>
)

export default MovieSubHeader;