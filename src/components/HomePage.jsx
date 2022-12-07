import React from "react";
import Album from "./Album";
import "../App.css";

function getGreeting() {
  const hour = new Date().getHours();
  const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"];

  if (hour > 4 && hour < 12) return welcomeTypes[0];
  else if (hour < 18 && hour > 12) return welcomeTypes[1];
  else return welcomeTypes[2];
}

function HomePage({ albums }) {
  return (
    <div className="home-wrapper">
      <h1 className="welcome">{getGreeting()},</h1>

      <div className="albums-list">
        {albums.map((album, i) => (
          <Album key={i} name={album} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
