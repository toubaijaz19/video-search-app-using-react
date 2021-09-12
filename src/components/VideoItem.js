import './videoItem.css';
const VideoItem = ({ video, onSelectVideo, showInfo}) =>{
    const display = showInfo ? 'video-item': 'cards';
    const gridSystem = () => {
      return showInfo ? null : "four wide column";
    };
    return (
      <div className={`${gridSystem()} list-item`} >
        <div
          onClick={() => onSelectVideo(video)}
          className={`item ui ${display} segment`}
        >
          <img
            className="ui image"
            alt={video.snippet.title}
            src={video.snippet.thumbnails.default.url}
            style={{
              margin: "5px",
              width: showInfo ? "120px" : "200px",
              height: showInfo ? "90px" : "120px",
            }}
          />
          <div className="content">
            <a className="header" onClick={() => onSelectVideo(video)}>
              {video.snippet.title}
            </a>
            <br />
            <div className="description">{video.snippet.channelTitle}</div>
          </div>
        </div>
      </div>
    );
}

export default VideoItem;