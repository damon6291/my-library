import React from 'react';

const Child = ({ handleChangeMeChild }) => {
  const id = 1004;
  return (
    <div>
      I am child
      <br />
      <button onClick={() => handleChangeMeChild(id)}>Change Ancestor</button>
    </div>
  );
};

export default Child;
