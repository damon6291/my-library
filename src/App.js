import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as AllComponents from './components/index';

function App() {
  const [comp, setComp] = useState('Redux');

  const handleClick = (name) => {
    setComp(noSpace(name));
  };

  const noSpace = (name) => name.replace(/[^a-zA-Z]/g, '');

  const DynamicComponents = AllComponents[comp];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 overflow-auto vh-100">
          <AllComponents.SidebarDemo handleClick={handleClick} />
        </div>
        <div className="col-9 overflow-auto vh-100">
          <DynamicComponents />
        </div>
      </div>
    </div>
  );
}

export default App;
