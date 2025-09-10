import { useRef } from "react";
import MyContext from "./api/context";
import Hello from "./assets/Hello";
import Form from "./assets/Form";
import { Route, Routes } from "react-router";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";

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
      {/* <Form />

        <Hello />
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

        <button onClick={changeStyle}>Change Style</button> */}

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


      </Routes>



    </div>

  );
}

export default App;
