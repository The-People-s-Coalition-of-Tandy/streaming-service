import React from "react";
import "./leftPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, selectPage } from "./pageSlice";

function LeftPanel() {
  const dispatch = useDispatch();
  const { page } = useSelector(selectPage);

  return (
    <aside className="left-panel">
      <button
        className="panel-section"
        onClick={() => {
          dispatch(setPage("Albums"));
        }}
      >
        <span className={page === "Albums" ? "active" : ""}>Home</span>
      </button>

      <button
        className="panel-section"
        onClick={() => {
          dispatch(setPage("AllArtists"));
        }}
      >
        <span className={page === "AllArtists" ? "active" : ""}>Artists</span>
      </button>
    </aside>
  );
}

export default LeftPanel;
