import React from 'react';
import Format from '../../Format';

const json = [
  {
    code: `npm install bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';`,
  },
];

const Bootstrap = () => {
  return <Format json={json} />;
};

export default Bootstrap;
