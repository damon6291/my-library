import React from 'react';
import Format from '../../Format';
import RouterDemo from './RouterDemo';

const js = `import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RouterDemo = () => {
  const RouterExample1 = ({ id }) => {
    return <h1>Router Example {id}</h1>;
  };
  const RouterExample2 = (props) => {
    return <h1>Router Example {props.match.params.id}</h1>;
  };
  return (
    <Router>
      <Link to={\`/router1/\${123}\`}>Router1</Link>
      <Link to={\`/router2/\${234}\`}>Router2</Link>
      <Route
        path="/router1/:id"
        render={(props) => <RouterExample1 id={props.match.params.id} />}
      />
      <Route path="/router2/:id" component={RouterExample2} />
    </Router>
  );
};

export default RouterDemo;

`;
const json = [{ code: js }];

const Router = () => {
  return <Format Demo={RouterDemo} json={json} />;
};

export default Router;
