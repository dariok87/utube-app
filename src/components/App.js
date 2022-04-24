import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTextSubmit = (term) => {
    console.log(term);
  };

  render() {
    return ( 
      <div><SearchBar onFormSubmit={this.onTextSubmit}/></div>
    );
  }
}

export default App;