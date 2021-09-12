import react from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends react.Component {
  state = { videosLink: [], selectedVideo: null, showInfo: false };
  componentDidMount() {
    this.onInputSubmit("songs Tv shows standup comedy ");
  }
  onInputSubmit = async (searchVal) => {
    console.log(searchVal);
    const response = await youtube.get("/search", {
      params: {
        q: searchVal,
      },
    });
    console.log(response.data.items);
    this.setState({
      videosLink: response.data.items,
      selectedVideo: response.data.items[0],
      showInfo: false
    });
  };

  onSelectVideo = (video) => {
    console.log("Selected video details: ", video);
    this.setState({ 
        selectedVideo: video,
        showInfo: true
     });
  };
  colSpan = function () {
      return this.state.showInfo ? 'five' : 'sixteen'; 
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onInputSubmit} />
        {/* Semantic UI Grid system */}
        <div className="ui stackable two column grid">
          <div className="ui row">
            <div
              style={{ display: this.state.showInfo ? 'block' : 'none' }}
              className="eleven wide column"
            >
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div  className={`${this.colSpan()} wide column`} > 
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videosLink={this.state.videosLink}
                showInfo= {this.state.showInfo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;