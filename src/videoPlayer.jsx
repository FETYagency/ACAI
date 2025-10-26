function VideoPlayer({ video, onVideoEnd }) {
  return (
    <video
      src={video.url}
      controls
      className="videoPlayer"
      onEnded={() => onVideoEnd(video.id)} // fires only when video finishes
    />
  );
}

export default VideoPlayer;
