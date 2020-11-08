import React from 'react';
import Format from '../../Format';

const js = `import React from "react";

export const add = (num1, num2) => num1 + num2;

export const reactAdd = (num1, num2) => {
  let num = num1 + num2;
  return <h2>{num}</h2>;
};

export default {
  add,
  reactAdd,
};`;

const js2 = `import AddService from './AddService'

const add = (num1, num2) => {
  return AddService.add(num1, num2);
}

const reactAdd = (num1, num2) => AddService.reactAdd(num1, num2);`;

const json = [{ code: js }, { code: js2 }];

const ExportFunction = () => {
  return <Format json={json} />;
};

export default ExportFunction;
