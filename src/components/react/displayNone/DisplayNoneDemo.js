import React, { useState } from 'react';

const DisplayNoneDemo = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="d-flex flex-column align-items-center">
      <span className="border-bottom border-dark">First</span>
      <span className={`border-bottom border-dark ${isHidden ? 'd-none' : ''}`}>Second</span>
      <span className="border-bottom border-dark mb-3">Third</span>
      <button onClick={() => setIsHidden(!isHidden)}>Button</button>
    </div>
  );
};

export default DisplayNoneDemo;
