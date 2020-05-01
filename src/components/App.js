import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{margin:'15px'}}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
