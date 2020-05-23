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