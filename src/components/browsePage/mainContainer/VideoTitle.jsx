import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black p-2 md:p-3 px-4 md:px-10 text-md md:text-lg rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-3 px-14 mx-2 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
