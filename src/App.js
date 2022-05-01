import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [s, ss] = React.useState("");
  React.useEffect(() => {
    ss(localStorage.getItem("note"));
    var win = document.getElementById("s").contentWindow;
    console.log(win);
    axios.post(
      "https://hchc-shortener-default-rtdb.asia-southeast1.firebasedatabase.app/shortener.json",
      {
        code: s,
      }
    );
  }, [s]);
  return (
    <div className="App">
      {s}
      <iframe
        id="s"
        title="cock"
        src="http://3.0.100.21:5010/?search="
        height="700"
        width="1000"
      ></iframe>
    </div>
  );
}

export default App;
