import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by Sarah Gwynn and is{" "}
          <a href="https://fervent-benz-a17bf6.netlify.app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
