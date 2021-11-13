import React from "react";
import Gallery from "./Gallery";
import "./gallery.css";

function App() {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Presidential Peanut Gallery</h1> */}
      <div style={{ textAlign: "center" }} className="wrapper">
        <div className="typing-demo">Presidential Peanut Gallery.</div>
      </div>
      <Gallery />
    </>
  );
}

export default App;
