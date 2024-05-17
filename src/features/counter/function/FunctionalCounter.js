import React, { useState } from "react";

export default function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDec = () => {
    if (count === 0) {
      alert("cannot accept -ve value");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <h6>functional counter : {count} </h6>
      <button onClick={handleDec} disabled={count === 0 ? false : false}>
        &nbsp; &nbsp; - &nbsp; &nbsp;
      </button>
      &nbsp;
      <button onClick={handleInc}> &nbsp; &nbsp; + &nbsp; &nbsp;</button>
    </>
  );
}
