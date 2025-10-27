import { useState } from "react";
import VideoPlayer from "./videoPlayer";
import "./App.css";

function App() {
  const videos = [
    { id: 4, title: "Introduction to Algorithms", url: "/videos/video4.mp4" },
    { id: 2, title: "How Computers Solve Problems", url: "/videos/video2.mp4" },
    { id: 1, title: "Fundamentals of Connectionist AI", url: "/videos/video1.mp4" },
    { id: 3, title: "AI Neural Network", url: "/videos/video3.mp4" },
  ];

  const teamMembers = [
    { name: "Baha Eddine Tria", role: "CEO", photo: "/baha.jpg" },
    { name: "Caleb", role: "CTO", photo: "/caleb.jpg" },
    { name: "Etham", role: "Writer", photo: "/etham.jpg" },
    { name: "Evellyn", role: "Designer", photo: "/sharmota.jpg" },
    { name: "Naba", role: "CIO", photo: "/sharmota.jpg" },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [watchedVideos, setWatchedVideos] = useState([]);

  const handleVideoEnd = (videoId) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos([...watchedVideos, videoId]);
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <img src="/FETY.png" alt="Team Logo" className="app__logo" />
      </header>

      <div className="app__content">
        {/* ===== Video Section ===== */}
        <div className="app__videoSection">
          <VideoPlayer video={currentVideo} onVideoEnd={handleVideoEnd} />
        </div>

        {/* ===== Sidebar ===== */}
        <div className="app__sidebar">
          <h3 className="sidebarTitle">🎬 Videos</h3>
          <ul className="videoList">
            {videos.map((video) => (
              <li
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className={`videoItem ${
                  video.id === currentVideo.id ? "active" : ""
                }`}
              >
                <span className="videoTitle">{video.title}</span>
                {watchedVideos.includes(video.id) && (
                  <span className="checkmark">✓</span>
                )}
              </li>
            ))}
          </ul>

          {/* ===== Team Section ===== */}
          <div className="teamSection">
            <h4>👥 Team Members</h4>
            <ul className="teamList">
              {teamMembers.map((member, index) => (
                <li key={index} className="teamMember">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="memberPhoto"
                  />
                  <div className="memberInfo">
                    <strong>{member.name}</strong>
                    <p>{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
