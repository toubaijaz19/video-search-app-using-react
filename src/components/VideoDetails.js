const VideoDetails = ({ video }) => {
    if(!video){
        return <div></div>;
    }
    console.log(video.snippet.title);
    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div style={{ marginTop: "40px" }}>
        <div className="ui embed">
          <iframe title="video player" src={vidSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header"> {video.snippet.title} </h4>
          <p>
            <strong>Channel Name: </strong>
            {video.snippet.channelTitle}
          </p>
          <p> {video.snippet.description} </p>
        </div>
      </div>
    );
}

export default VideoDetails;