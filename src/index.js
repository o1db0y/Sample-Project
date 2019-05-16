import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [num, setNum] = useState(Number(localStorage.getItem("num")) || 0);

  useEffect(() => {
    localStorage.setItem("num", num);
  }, [num]);

  return (
    <div>
      {num}
      <button onClick={() => setNum(num + 1)}>Add</button>
      <button onClick={() => setNum(num - 1)}>Subtract</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
