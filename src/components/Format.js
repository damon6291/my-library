import React from 'react';
import { Code } from './Syntax';

const Format = ({ Demo = null, json }) => {
  return (
    <React.Fragment>
      {Demo !== null ? (
        <div>
          <div className="border min-height-300">
            <Demo />
          </div>
          <br />
        </div>
      ) : null}

      {json.map((item, id) => {
        return <div key={id}>{Code((item.language = 'javascript'), item.code)} </div>;
      })}
    </React.Fragment>
  );
};

export default Format;
