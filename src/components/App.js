import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

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
      <div><SearchBar onFormSubmit={this.onTextSubmit}/>
        I have {this.state.videos.length} videos. {/*we should see value of 0 before submitting youtube request*/}
      </div>
    );
  }
}

export default App;