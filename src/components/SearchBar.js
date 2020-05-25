import React from "react";

class SearchBar extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {term: ''}
    };
    handleChange = (event) => {
        this.setState({term: event.target.value});
       // console.log(this.state.term);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.term);
    }
        render() {
            return (
                <div className= "ui segment">
                  <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                      <label>Search for COVID 19 information
                        <input value={this.state.term} onChange={this.handleChange} placeholder="e.g. search by country" />
                      </label>
                      <h5>{this.props.display}</h5>
                    </div>
                  </form>
                </div>
              );
        }
}

export default SearchBar;
