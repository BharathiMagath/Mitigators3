import React, { useEffect } from 'react';
import '../styles/Videos.css'; // Ensure you have this CSS file for styling

const Videos = () => {
  useEffect(() => {
    // You can initialize any necessary libraries or scripts here
  }, []);

  return (
    <div className="videos-page">
      <div className="video-container" data-aos="fade-up">
        <video autoPlay muted loop className="video-player">
          <source src="/public/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="video-info" data-aos="fade-right">
        <h2>Welcome to Our Video Presentation</h2>
        <p>This video will introduce you to our application's features and benefits. Watch to learn more about how our technology can improve your life.</p>
        <button className="start-button" onClick={() => window.location.href = '/login'}>
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default Videos;
