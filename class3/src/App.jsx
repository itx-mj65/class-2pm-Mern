import { useRef } from "react";

function App() {
  const boxRef = useRef(null);



  const changeStyle = () => {
    boxRef.current.style.backgroundColor = "lightgreen";
    boxRef.current.style.color = "white";
    boxRef.current.style.padding = "20px";
    boxRef.current.style.borderRadius = "10px";
    boxRef.current.style.transition = "0.3s";

    console.log(boxRef);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Style Example</h2>

      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightcoral",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Change My Style
      </div>

      <br />

      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
}

export default App;
