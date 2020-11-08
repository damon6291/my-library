import React from 'react';
import Format from '../../Format';

const js = `import React from 'react';
import * as AllComponents from './components';

const DynamicComponentDemo = () => {
  const DynamicComponents = AllComponents[comp];

  return <DynamicComponents />
};

export default DynamicComponentDemo;
`;

const json = [{ code: js }];

const DynamicComponent = () => {
  return <Format json={json} />;
};

export default DynamicComponent;
