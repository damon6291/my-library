import React from 'react';
import Format from '../../Format';
import KeyFrameAnimationDemo from './KeyFrameAnimationDemo';

const js = `import React from 'react';

const KeyFrameAnimationDemo = () => {
  return <div className="spin-animation"></div>;
};

export default KeyFrameAnimationDemo;
`;

const css = `.spin-animation {
  width: 50px;
  height: 50px;
  border: 7px solid gainsboro;
  border-left-color: steelblue;
  border-radius: 50%;
  background: transparent;
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}`;

const json = [
  {
    code: js,
  },
  { language: 'css', code: css },
];

const KeyFrameAnimation = () => {
  return <Format Demo={KeyFrameAnimationDemo} json={json} />;
};

export default KeyFrameAnimation;
