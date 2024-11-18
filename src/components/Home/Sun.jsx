import React from "react";
import sunrise from "../../assets/sunrise.svg";

function Sun() {
  return (
    <div className="flex flex-col gap-7 border py-5 px-4 rounded-lg shadow-xl drop-shadow-lg">
      <h2 className="text-gray-500">Sunrise & Sunset</h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <img src={sunrise} className="h-7 rounded-lg" alt="" />
          <h2 className="text-xl">07:30</h2>
        </div>
        <div className="flex gap-3 items-center">
          <img src={sunrise} className="h-7 rounded-lg" alt="" />
          <h2 className="text-xl">15:30</h2>
        </div>
      </div>
    </div>
  );
}

export default Sun;
