import React from "react";
import "./errorPage.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-modal">
        <img className="error-header" src='./Media/Images/soothingmusicheader.png'></img>
        <div className="error-message-modal">
          <p className="error-message">Oops...you're not connected to our servers!</p>
          <p className="error-message">Click below to try again</p>
          <button className="refresh-button" onClick={()=>{window.location = window.location}}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
