import AirQuality from "../components/Home/AirQuality";
import Day from "../components/Home/Day";
import Humidity from "../components/Home/Humidity";
import Sun from "../components/Home/Sun";
import UV from "../components/Home/UV";
import Visibility from "../components/Home/Visibility";
import Wind from "../components/Home/Wind";

function Home() {
  return (
    <div className="h-[88vh] w-[75vw] flex flex-row justify-between py-5">
      <div className="h-full w-full bg-white rounded-lg shadow-lg drop-shadow-xl border pl-5 py-6">
        {/* Days */}
        <h2 className="text-xl my-1 text-black font-semibold">Day's</h2>
        <div className="flex flex-row bg-white overflow-x-scroll gap-4 py-4 pl-4">
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
        </div>
        <h2 className="text-xl my-2 text-black font-semibold">Today's Highlights</h2>
        <div className="grid grid-cols-6 ">
          <Humidity />
          <UV/>
          <AirQuality />
          <Wind />
          <Visibility/><Sun/>
        </div>
      </div>
    </div>
  );
}

export default Home;
