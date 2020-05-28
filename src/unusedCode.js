//inside App.js
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

  //to be put back into App.js
  //handleSubmit={this.handleSubmit} display={this.state.display}

  //in SearchBar.js
  state = {term: ''};

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.term);
    }

    handleChange = event => {
      this.setState({term: event.target.value});
     
  }

  //inside SearchBar render()
  <div className= "ui segment">
                  <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                      <label style={{marginBottom: '15px'}}>Search for COVID 19 information</label>
                      <input value={this.state.term} onChange={this.handleChange} placeholder="e.g. search by country" />
                      <h5>{this.props.display}</h5>
                    </div>
                  </form>
                </div>
              );