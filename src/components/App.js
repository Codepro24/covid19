import './App.css';
import React from 'react';
import covidTracker from '../apis/covidTracker';
import youTube from '../apis/youTube';
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
      fetch("https://api.covid19api.co/")
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
    }

    handleSubmit = async (term) => {
        console.log(term);
        
        if (term === "news" || term === "video") {
          const response =  await youTube.get('/search', {
            params: {
              q: term
            }    
          })
          //console.log(response);
          this.setState({videos: response.data.items});

        } 
        else {
          const response = await covidTracker.get("/dataset/api/nsw-covid-19-cases.json");
          this.setState({results: response.data[0],
            confirmed: response.data[0].confirmed_cases
        });
          console.log(response);
          //this.setState({videos:  });  
        }
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
