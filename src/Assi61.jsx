import { useState } from "react";
import "./App.css";

export default function Assi61() {
  let [d, setD] = useState(0);

  let flag = true;

  function handleClick() {
    setD(d + 10);
  }

  return (
    <>
      {/* <div className=" text-center">
        <button>increase size</button>
      </div> */}

      <div className=" text-center mt-2 mx-auto    ">
        <button
          className="btn btn-primary"
          onClick={handleClick}
          disabled={d == 150}
        >
          Increase size
        </button>
      </div>
      <div
        className="  d-block  mx-auto my-4"
        style={{
          backgroundColor: `red`,
          width: d + `px`,
          height: d + `px`,
          borderRadius: 10,
        }}
      ></div>
    </>
  );
}
borderRadius: 10;
