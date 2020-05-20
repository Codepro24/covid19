import React from 'react';

const ResultsDisplay = (props) => {
return (
    <div>
        <h4>COVID 19 cases under investigation: 
        {props.display.currently_unknown} </h4>
        {/* <iframe title="NSW Data" width="700" height="400" src="https://data.nsw.gov.au/data/dataset/covid-19-cases-by-location/resource/21304414-1ff1-4243-a5d2-f52778048b29/view/2042df26-bed8-46b8-8ab1-d5579aebf5f1" frameBorder="0"></iframe> */}
    </div>
    );   
}

export default ResultsDisplay;