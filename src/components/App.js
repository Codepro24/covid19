import './App.css';
import React from 'react';
//import covidTracker from '../apis/covidTracker';
//import youTube from '../apis/youTube';
import SearchBar from './SearchBar';
import ResultsDisplay from './ResultsDisplay';
import VideoNews from './VideoNews';
import Others from './Others';

class App extends React.Component {
    state = {
      results: [],
      confirmed:'',
      videos:[],
      selectedVideo: null
    };

    componentDidMount() {
      this.handleSubmit();
      //console.log(this.handleSubmit);
      //NSW data api?
      //https://data.nsw.gov.au/data/api/3/action/package_show?id=aefcde60-3b0c-4bc0-9af1-6fe652944ec2
      const allData = fetch("https://api.covid19api.com/")
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
      console.log(allData);
    }

    handleSubmit = async (term) => {
      //maybe use filter to filter 'term'
      // const { robots, searchfield } = this.state;
      //   const filteredRobots = robots.filter(robot => {
      //       return robot.name.toLowerCase().includes(searchfield.toLowerCase())  
      
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
              <VideoNews video={this.state.videos}/>
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
