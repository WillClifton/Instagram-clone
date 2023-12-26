import React from "react";
import "./Homepage.css";
import SideNav from "../../navigation/Sidenav";
import Timeline from "../../timeline/Timeline";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__navWrapper">
        <SideNav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Homepage;
