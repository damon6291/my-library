import React from 'react';
import Format from '../../Format';
import InputSearchDemo from './InputSearchDemo';

const js = `import React, { useState } from 'react';

const InputSearchDemo = () => {
  const [query, setQuery] = useState('');
  const data = ['C', 'Java', 'JavaScript', 'React'];
  const modifiedData = data.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase()) ? item : null;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="d-flex flex-column">
        {modifiedData.map((data, i) => (
          <span key={i}>{data}</span>
        ))}
      </div>
    </div>
  );
};

export default InputSearchDemo;

`;

const json = [{ code: js }];

const InputSearch = () => {
  return <Format Demo={InputSearchDemo} json={json} />;
};

export default InputSearch;
