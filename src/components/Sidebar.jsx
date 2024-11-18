import React from "react";
import rain from "../assets/rain.svg";

const Sidebar = () => {
  return (
    <div className="h-[85vh] w-[20vw] flex flex-col justify-between items-start">
      {/* Upper Sidebar */}
      <div>
        <img
          src={rain}
          className="h-[270px] px-7 object-center rounded-xl w-[250px]"
          alt=""
        />
        <h2 className="text-7xl">12 C</h2>
        <p>
          Monday, <span>12:00</span>
        </p>
      </div>
      {/* Bottom Sidebar */}
      <div className="text-start mt-4">
        <p>Mostly Rainy</p>
        <p>Rain 30%</p>
      </div>
      <div className="mt-4 w-[90%] h-20 flex items-center justify-center rounded-xl overflow-hidden relative">
        <img
          src="https://i.pinimg.com/736x/a7/42/9a/a7429a02e6a156f9f8e76435fa601c40.jpg"
          className="w-full h-full object-cover absolute -z-10"
          alt=""
        />
        <h2 className="text-2xl text-white">New York</h2>
      </div>
    </div>
  );
};

export default Sidebar;
