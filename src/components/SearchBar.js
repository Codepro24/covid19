import React from "react";

class SearchBar extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    };
    handleChange = (event) => {
        this.setState({term: event.target.value});
        console.log(this.state.term);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }
        render() {
            return (
                <div className= "ui segment">
                  <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                      <label>User Input</label>
                      <input value={this.state.term} onChange={this.handleChange} />
                    </div>
                  </form>
                </div>
              );
        }
}

export default SearchBar;
