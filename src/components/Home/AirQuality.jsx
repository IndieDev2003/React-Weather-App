import React from "react";

function AirQuality() {
  return (
    <div className="h-[206px] w-[162px] px-6 py-5 border shadow-xl rounded-lg drop-shadow-lg flex flex-col justify-between">
      <h2 className="text-gray-500">Air Quality</h2>
      <p className="text-center text-7xl">105</p>
      <h2 className="w-full px-1 py-1 text-center bg-blue-300 rounded-lg">
        Average
      </h2>
    </div>
  );
}

export default AirQuality;
