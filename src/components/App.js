import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./videoList";

class App extends React.Component {
  state = { videos: [] };

  onTextSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return ( 
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit}/>
        <VideoList />
      </div>
    );
  }
}

export default App;