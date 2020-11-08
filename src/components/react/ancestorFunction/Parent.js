import React from 'react';
import Child from './Child';

const Parent = ({ handleChangeMe }) => {
  const handleChangeMeChild = (id) => {
    handleChangeMe(id);
  };
  return (
    <div>
      I am parent
      <br />
      <Child handleChangeMeChild={handleChangeMeChild} />
    </div>
  );
};

export default Parent;
