import React from 'react';
import Format from '../../Format';
import LinearGradientDemo from './LinearGradientDemo';

const js = `import React from "react";

const LinearGradientDemo = () => {
  return <div className="gradient-image text-center">Linear Gradient</div>;
};

export default LinearGradientDemo;
`;
const css = `.gradient-image {
  height: 300px;
  background: linear-gradient(to left, red, blue);
}`;

const json = [
  {
    code: js,
  },
  { language: 'css', code: css },
];

const LinearGradient = () => {
  return <Format Demo={LinearGradientDemo} json={json} />;
};

export default LinearGradient;
