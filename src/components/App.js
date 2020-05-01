import React from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

class App extends React.Component {
    state = {results: []};

    handleSubmit = (term) => {
        console.log(term);
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
