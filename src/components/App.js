import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import ResultsDisplay from './ResultsDisplay';
import covidTracker from '../apis/covidTracker';
import VideoNews from './VideoNews';
import Others from './Others';

class App extends React.Component {
    state = {results: [], confirmed:''};

    handleSubmit = async (term) => {
        //console.log(term);
        const response = await covidTracker.get("/dataset/api/nsw-covid-19-cases.json");
        //this.setState({results: response})
        console.log(response);
        this.setState({results: response.data[0],
            confirmed: response.data[0].confirmed_cases
        });
        console.log(this.state.confirmed);
        console.log(this.state.results);

        }

  render() {
    return (
       <div className="for-Margin ui container">
          <SearchBar handleSubmit={this.handleSubmit} />
          <div className="ui grid">
            <div className="rule-border four wide column">
              <ResultsDisplay display={this.state.results} />
            </div>
            <div className="rule-border six wide column">
              <VideoNews />
            </div>
            <div className="rule-border six wide column">
              <Others />
            </div>
            </div>
           </div>
          );
  }
}

export default App;
