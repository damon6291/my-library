import React from 'react';
import Format from '../../Format';
import TelephoneDemo from './TelephoneDemo';

const js = `import React from 'react';

const TelephoneDemo = () => {
  return (
    <div className="text-center">
      <a href="tel:201-856-7857">Call Damon</a>
    </div>
  );
};

export default TelephoneDemo;
`;

const json = [{ code: js }];

const Telephone = () => {
  return <Format Demo={TelephoneDemo} json={json} />;
};

export default Telephone;
