import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Quiz App</h1>
      <p>Click below to start the quiz:</p>
      <Link to="/quiz">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Start Quiz</button>
      </Link>
    </div>
  );
}

export default HomePage;
