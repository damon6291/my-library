import React from 'react';
import Format from '../../Format';
import MailToDemo from './MailToDemo';

const js = `import React from "react";

const MailToDemo = () => {
  return (
    <div className="text-center">
      <a href="mailto:damon6291@gmail.com">Email to Damon</a>
    </div>
  );
};

export default MailToDemo;
`;

const json = [
  {
    code: js,
  },
];

const MailTo = () => {
  return <Format Demo={MailToDemo} json={json} />;
};

export default MailTo;
