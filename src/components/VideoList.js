import VideoItem from "./VideoItem";
const VideoList = ({ videosLink, onSelectVideo, showInfo }) => {
    const List = videosLink.map((video)=>{
        return (
          <VideoItem
            key={video.id.videoId}
            onSelectVideo={onSelectVideo}
            video={video}
            showInfo={showInfo}
          />
        );
    })
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "40px" }}>
        <div className={showInfo ? null : "ui stackable four column grid"}>
          <div className={showInfo ? null : "ui row"}>
            {List} 
          </div>
        </div>
      </div>
    );
}

export default VideoList;