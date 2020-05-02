import React from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import covidTracker from '../apis/covidTracker';

class App extends React.Component {
    state = {results: []};

    handleSubmit = async (term) => {
        //console.log(term);
        const response = await covidTracker.get("/dataset/api/nsw-covid-19-cases.json");
        //this.setState({results: response})
        console.log(response);
        
    }

  render() {
    return (
      <div className="ui container" style={{margin:'15px'}}>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ResultsList />
      </div>
    );
  }
}

export default App;
