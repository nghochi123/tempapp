import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [s, ss] = React.useState("");
  React.useEffect(() => {
    ss(localStorage.getItem("note"));
    axios.post(
      "https://hchc-shortener-default-rtdb.asia-southeast1.firebasedatabase.app/shortener.json",
      {
        code: s,
      }
    );
  }, [s]);
  return <div className="App">{s}</div>;
}

export default App;
