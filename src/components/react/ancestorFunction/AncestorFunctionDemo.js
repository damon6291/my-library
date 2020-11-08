import React, { useState } from 'react';
import Parent from './Parent';

const AncestorFunctionDemo = () => {
  const [changeMe, setChangeMe] = useState(false);
  const handleChangeMe = (id) => {
    setChangeMe(!changeMe);
    alert(id);
  };
  return (
    <div className={`container ${changeMe ? 'bg-dark' : 'bg-primary'}`}>
      I am ancestor
      <br />
      <Parent handleChangeMe={handleChangeMe} />
    </div>
  );
};

export default AncestorFunctionDemo;
