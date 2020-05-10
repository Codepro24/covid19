import React from 'react';

const ResultsDisplay = (props) => {
return (
    <div>
        <h4>COVID 19 cases under investigation: 
        {props.display.currently_unknown} </h4>
    </div>
    );   
}

export default ResultsDisplay;