import React from 'react';
import Format from '../../Format';
import MapFilterSortCloneDemo from './MapFilterSortCloneDemo';

const js = `import React from 'react';

const MapFilterDemo = () => {
  const data = [
    { name: 'First', id: 1 },
    { name: 'Second', id: 2 },
    { name: 'Third', id: 3 },
    { name: 'Fourth', id: 4 },
  ];

  const cloneData = JSON.parse(JSON.stringify(data));

  const ids = data.map((item) => item.id);

  const modifiedData = data.filter((item) => {
    return item.name !== 'First' ? item : null;
  });

  const sortedData = cloneData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="d-flex justify-content-around text-center">
      <div className="d-flex flex-column">
        <h4>Original</h4>
        {data.map((item, id) => (
          <span key={id}>{item.name + ' ' + item.id}</span>
        ))}
      </div>
      <div className="d-flex flex-column">
        <h4>Map</h4>
        {ids.map((id) => (
          <span key={id}>{id}</span>
        ))}
      </div>
      <div className="d-flex flex-column">
        <h4>Filter</h4>
        {modifiedData.map((item, id) => (
          <span key={id}>{item.name + ' ' + item.id}</span>
        ))}
      </div>
      <div className="d-flex flex-column">
        <h4>Clone & Sort</h4>
        {sortedData.map((item, id) => (
          <span key={id}>{item.name + ' ' + item.id}</span>
        ))}
      </div>
    </div>
  );
};

export default MapFilterDemo;
`;

const json = [
  {
    code: js,
  },
];

const MapFilterSortClone = () => {
  return <Format Demo={MapFilterSortCloneDemo} json={json} />;
};

export default MapFilterSortClone;
