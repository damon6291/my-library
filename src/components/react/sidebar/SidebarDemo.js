import React, { useState } from 'react';
import ReactData from '../../../data/ReactData.json';
import JqueryData from '../../../data/JqueryData.json';

const SidebarDemo = ({ handleClick }) => {
  const [clickedName, setClickedName] = useState('');
  const [query, setQuery] = useState('');

  const makeActive = (name) => {
    handleClick(name);
    setClickedName(name);
  };

  const modifyData = (data) => {
    return data.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase()) ? item : null;
    });
  };

  const sortData = (data) => {
    return modifyData(data).sort((a, b) => a.localeCompare(b));
  };

  const dataView = (language, whatData) => {
    return (
      <React.Fragment>
        <br />
        <li className="nav-item ml-3">
          <h4>{language}</h4>
        </li>
        {sortData(whatData).map((data, id) => {
          return (
            <li className="nav-item" key={id}>
              <a
                className={`nav-link cursor-pointer ${
                  clickedName === data ? ' text-primary' : ' text-secondary'
                } `}
                onClick={() => makeActive(data)}>
                {data}
              </a>
            </li>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <ul className="nav flex-column bg-light">
      <li className="nav-item align-self-center">
        <h4>Damon's Library</h4>
      </li>
      <br />
      <li className="nav-item align-self-center">
        <input
          type="text"
          placeholder="Search.."
          className=""
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </li>

      {dataView('React', ReactData)}
      {dataView('JQuery', JqueryData)}
    </ul>
  );
};

export default SidebarDemo;
