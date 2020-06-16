import React from 'react';

class SearchBar extends React.Component  {
  state = {
    term: ''
  }

  componentDidMount() {
    //console.log(this.props.display);
  }

  handleSubmit = event => {
    event.preventDefault();
    
  }
  handleChange = event => {
    this.setState({term: event.target.value})
    console.log(this.state.term);
  } 
        render() {
            return (
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
        }
}

export default SearchBar;
