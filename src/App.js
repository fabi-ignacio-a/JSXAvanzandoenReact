import "./styles.css";
import React from "react";

const MyPages = {
  Sports: ({ number }) => {
    return <p> Sports Page number {number} </p>;
  },
  Movies: ({ number }) => {
    return <p> Movies Page number {number}</p>;
  }
};

export default function App() {
  return (
    <div className="App">
      <MyPages.Sports number={1} />
      <MyPages.Movies number={2} />
    </div>
  );
}
