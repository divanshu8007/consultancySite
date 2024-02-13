import React, { useEffect, useRef, useState } from "react";
import commonstyles from "../../styles/commonstyles";
import "./thumbstyles.css"; // Import any other necessary CSS files
import imagepath from "../../constants/imagepath";

function Dashboard() {
  const [value, setValue] = useState(0);
  const animationRef = useRef(0);

  // Function to continuously update the slider value
  const updateSlider = () => {
    setValue((prevValue) => (prevValue + 1) % 101); // Increment value continuously and reset at 100
    animationRef.current = requestAnimationFrame(updateSlider);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateSlider);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div>
      <div>
        <video
          src={`/video.mp4`}
          width="100%"
          height="auto"
          className="mt-1 shadow-lg shadow-gray-700"
          loop
          autoPlay
          muted
        />
        <span
          className={`${commonstyles.text6xl.bold} text-white absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 shadow-slate-700  `}
          style={{ textShadow: '29 8 20px rgba(0, 0, 0, 1)' }} 
        >
          Lorem Ipsum
        </span>
      </div>
      <div className="p-12">
        <div className="w-1/2">
          <h1 className={`${commonstyles.text4xl.medium} text-slate-700`}>
            Lorem Ipsum.
          </h1>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            readOnly
            className="bg-green-300 h-1 appearance-none outline-none rounded-full custom-thumb "
          />
          <p className={`${commonstyles.textlg.default} mt-8`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
