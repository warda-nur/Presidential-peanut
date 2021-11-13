import React from "react";
import Gallery from "./Gallery";
import "./gallery.css";
// import Card from "@mui/material/Card";

function App() {
  return (
    <>
      <div className="card">
        {/* <h1 style={{ textAlign: "center" }}>Presidential Peanut Gallery</h1> */}
        <div style={{ textAlign: "center" }} className="wrapper">
          <div className="typing-demo">
            Presidential Peanut <span>Gallery.</span>
          </div>
        </div>
        <Gallery />
      </div>
    </>
  );
}

export default App;
