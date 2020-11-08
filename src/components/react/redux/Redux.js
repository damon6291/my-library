import React from 'react';
import Format from '../../Format';

const index = `import React from 'react';
import ReduxReducer from './ReduxReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReduxContainer from './ReduxContainer';

const allReducer = combineReducers({
  ReduxReducer,
});

const store = createStore(allReducer);

const index = () => {
  return (
    <Provider store={store}>
      <ReduxContainer />
    </Provider>
  );
};

export default index;
`;

const action = `export const CREATE_MODULE = 'CREATE_MODULE';
export const FIND_MODULES_FOR_COURSE = 'FIND_MODULE_FOR_COURSE';

export const createModule = (dispatch, module) => dispatch({ type: CREATE_MODULE, module });

export const findModulesForCourse = (dispatch, module) =>
  dispatch({
    type: FIND_MODULES_FOR_COURSE,
    module,
  });
`;

const component = `import React, { useEffect } from 'react';

const ReduxComponent = ({ modules = [], createModule, findModulesForCourse }) => {
  const courseId = 1;
  useEffect(() => {
    findModulesForCourse(courseId);
  }, [modules]);
  return (
    <div>
      {modules.map((module, id) => {
        return (
          <div>
            <h2 key={id}>{module._id}</h2>
            <button onClick={() => createModule(courseId, { title: 'New Module' })}></button>
          </div>
        );
      })}
    </div>
  );
};

export default ReduxComponent;
`;

const container = `import { connect } from 'react-redux';
import ReactComponent from './ReduxComponent';
import { createModule } from './ReduxAction';
import ModuleService from '../services/ModuleService';

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
});

const propertyToDispatchMapper = (dispatch) => ({
  findModulesForCourse: (courseId) =>
    ModuleService.findModulesForCourse(courseId).then((modules) => {
      findModulesForCourse(dispatch, modules);
    }),

  createModule: (courseId, module) =>
    ModuleService.createModule(courseId, module).then((newModule) =>
      createModule(dispatch, newModule)
    ),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(ReactComponent);
`;

const reducer = `import { CREATE_MODULE, FIND_MODULES_FOR_COURSE } from './ReduxAction';

const initialState = {
  modules: [],
};

const ReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MODULE:
      return {
        modules: [...state.modules, action.module],
      };
    case FIND_MODULES_FOR_COURSE:
      return {
        modules: action.module,
      };
    default:
      return state;
  }
};

export default ReduxReducer;
`;

const service = `const createUrl = (courseId) => {
  return \`https://wbdv-generic-server.herokuapp.com/api/damon/courses/\${courseId}/modules\`;
};

export const createModule = (courseId, module) =>
  fetch(createUrl(courseId), {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());

export const findModulesForCourse = (courseId) =>
  fetch(createUrl(courseId)).then((response) => response.json());

export default {
  createModule,
  findModulesForCourse,
};
`;

const json = [
  { code: index },
  { code: component },
  { code: container },
  { code: action },
  { code: reducer },
  { code: service },
];

const Redux = () => {
  return <Format json={json} />;
};

export default Redux;
