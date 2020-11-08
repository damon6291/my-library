import React, { useRef, useState, useEffect } from 'react';
import { fadeIn } from './Animation';

const GsapDemo = () => {
  let red = useRef(null);
  let orange = useRef(null);
  let yellow = useRef(null);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    fadeIn(red, 0, 120, 1);
    fadeIn(orange, 120, 0, 1);
    fadeIn(yellow, 0, 300, 2);
  });

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div ref={(e) => (red = e)} className="box bg-danger"></div>
        <div ref={(e) => (orange = e)} className="box bg-primary"></div>
        <div ref={(e) => (yellow = e)} className="box bg-success"></div>
      </div>
      <br />
      <button onClick={() => setRandom(!random)}>Animation</button>
    </div>
  );
};

export default GsapDemo;
