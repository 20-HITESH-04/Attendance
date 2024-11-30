"use client"
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';

function Attendance() {
  const [capture, setCapture] = useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user', // Use 'environment' for the rear camera on mobile devices
  };

  const capturePhoto = (webcamRef) => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapture(imageSrc); // Save captured photo
    }
  };

  const webcamRef = React.useRef(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance</h2>
      <div className="flex flex-col items-center gap-4">
        {/* Live Camera Feed */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            height={300}
            videoConstraints={videoConstraints}
            className="rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => capturePhoto(webcamRef)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Capture Photo
          </button>
          <button
            onClick={() => setCapture(null)}
            className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300"
          >
            Reset
          </button>
        </div>

        {/* Display Captured Photo */}
        {capture && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Captured Photo:</h3>
            <Image src={capture} alt="Captured" className="rounded-lg border" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Attendance;