import React from 'react';
import Format from '../../Format';
import AncestorFunctionDemo from './AncestorFunctionDemo';

const js1 = `import React, { useState } from 'react';
import Parent from './Parent';

const AncestorFunctionDemo = () => {
  const [changeMe, setChangeMe] = useState(false);
  const handleChangeMe = (id) => {
    setChangeMe(!changeMe);
    alert(id);
  };
  return (
    <div className={\`container \${changeMe ? 'bg-dark' : 'bg-primary'}\`}>
      I am ancestor
      <br />
      <Parent handleChangeMe={handleChangeMe} />
    </div>
  );
};

export default AncestorFunctionDemo;`;

const js2 = `import React from 'react';
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

export default Parent;`;

const js3 = `import React from 'react';

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

export default Child;`;

const json = [
  {
    code: js1,
  },
  {
    code: js2,
  },
  {
    code: js3,
  },
];

const AncestorFunction = () => {
  return <Format Demo={AncestorFunctionDemo} json={json} />;
};

export default AncestorFunction;
