import React from 'react';
import Format from '../../Format';

const js = `components/index.js
export {default as File1} from './File1/File1';
export {default as File2} from './File2/File2';
export {default as File3} from './File3/File3';`;

const json = [
  {
    code: js,
  },
];

const ComponentIndex = () => {
  return <Format json={json} />;
};

export default ComponentIndex;
