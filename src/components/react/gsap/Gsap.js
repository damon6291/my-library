import React from 'react';
import Format from '../../Format';
import GsapDemo from './GsapDemo';

const js1 = `import React, { useRef, useState, useEffect } from 'react';
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

export default GsapDemo;`;

const js2 = `import gsap from 'gsap';

export const fadeIn = (node, xVal, yVal, duration) =>
  gsap.from(node, {
    x: xVal,
    y: yVal,
    duration: duration,
    opacity: 0,
    ease: 'power2.inOut',
  });
`;

const json = [{ code: js1 }, { code: js2 }];

const Gsap = () => {
  return <Format Demo={GsapDemo} json={json} />;
};

export default Gsap;
