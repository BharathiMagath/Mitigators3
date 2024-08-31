import React from 'react';
import QRCode from 'qrcode.react';
import '../styles/Qr.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
const Qr = ({ value, size = 150, onScan, text }) => {
  // Define the background image URL
  const backgroundImageUrl = 'background.png'; // Adjust the path as needed
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/HomePage');
  };
  return (
    <div className="qr-page">
      <div className="qr-left">
        <h1 className="qr-title animated-text">SCAN<br/>QR CODE</h1>
        <p className="qr-description">
          The high cost of advanced myoelectric prostheses has made them inaccessible to many individuals in need, 
          particularly in developing nations. We have addressed this by utilizing 3D printing. 
          By leveraging microcontrollers and sensors, our prosthesis delivers precise motion control and real-time feedback.
        </p>
        <button className="qr-button" onClick={navigateToHome}>GET STARTED</button>
      </div>
      <div className="qr-right" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      
        <div className="qr-container">
          <QRCode
            className="qr-code"
            value={value}
            size={size}
            fgColor="#000000" // QR code color
            bgColor="#ffffff" // QR code background color
          />
          {text && <p className="qr-text animated-text">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default Qr;
