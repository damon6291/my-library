import React from 'react';
import Format from '../../Format';
import ClipImageDemo from './ClipImageDemo';

const js = `import React from "react";

const ClipImageDemo = () => {
  return <div className="clip-image text-center">Clip Image</div>;
};

export default ClipImageDemo;
`;
const css = `.clip-image {
  height: 300px;
  background: linear-gradient(to right bottom, rgba(172, 201, 91, 0.7), rgba(209, 92, 151, 0.6));
  clip-path: polygon(0 0, 100% 0, 100% 68%, 0 100%);
}
`;

const json = [
  { code: 'https://bennettfeely.com/clippy/' },
  {
    code: js,
  },
  { language: 'css', code: css },
];

const ClipImage = () => {
  return <Format Demo={ClipImageDemo} json={json} />;
};

export default ClipImage;
