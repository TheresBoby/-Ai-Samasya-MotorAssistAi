import React, { useState } from 'react';
import '../styles/VideoPage.css';

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // List of videos
  const videoList = [
    {
      id: '1',
      title: 'Introduction to Python',
      description: 'Learn the basics of Python programming.',
      videoId: 'rfscVS0vtbw', // YouTube video ID
    },
    {
      id: '2',
      title: 'Web Development Basics',
      description: 'An introduction to HTML, CSS, and JavaScript.',
      videoId: 'UB1O30fR-EE',
    },
    {
      id: '3',
      title: 'Data Science Overview',
      description: 'Discover the power of data science and AI.',
      videoId: 'Gv9_4yMHFhI',
    },
  ];

  // Function to handle video selection
  const handlePlay = (videoId) => {
    setSelectedVideo(videoId); // Set the selected video
  };

  return (
    <div className="video-page">
      <h1 className="title">Video Classes</h1>
      <div className="video-section">
        {/* Render the video player if a video is selected */}
        {selectedVideo ? (
          <div className="video-player">
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video Player"
            ></iframe>
          </div>
        ) : (
          <p className="placeholder">Select a video to start learning!</p>
        )}
      </div>
      <div className="video-list">
        {/* Render the list of videos */}
        {videoList.map((video) => (
          <div className="video-card" key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <button
              className="play-button"
              onClick={() => handlePlay(video.videoId)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
