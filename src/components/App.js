import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTextSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(response);
  };

  render() {
    return ( 
      <div><SearchBar onFormSubmit={this.onTextSubmit}/></div>
    );
  }
}

export default App;