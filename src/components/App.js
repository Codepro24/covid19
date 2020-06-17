import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import ResultsDisplay from './ResultsDisplay';
import VideoNews from './VideoNews';

class App extends React.Component {
    state = {
      results: [],
      videos:[],
      display: '',
      term: ''
    };
    componentDidMount() {
      this.handleSubmit("covid");
      console.log(this.handleSubmit);
      //NSW data api?
      //https://data.nsw.gov.au/data/api/3/action/package_show?id=aefcde60-3b0c-4bc0-9af1-6fe652944ec2
    }

    handleSubmit =  async term => {
      console.log(term);
      
      let searchTerm = 'covid';

      if (term.includes(searchTerm.toLowerCase())) {
        const allData =  await fetch("https://data.nsw.gov.au/data/api/3/action/package_show?id=aefcde60-3b0c-4bc0-9af1-6fe652944ec2");
        // .then(response => response.json())
        // .then(result => console.log(result))
        // .catch(error => console.log("error", error));
        console.log(allData);
      } else 
         {
           this.setState({display: 'Please enter covid related search'})
         };
    }
    
  render() {
    return (
       <div className="for-Margin ui container">
          <SearchBar display = {this.state.display} handleSubmit = {this.handleSubmit}/>
          <div className="ui grid">
            <div className="rule-border eight wide column">
              <ResultsDisplay display={this.state.results} />
            </div>
            <div className="eight wide column">
              <VideoNews video={this.state.videos}/>
            </div>
          </div>
        </div>
          );
  }
}

export default App;
