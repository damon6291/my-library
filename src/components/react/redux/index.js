import React from 'react';
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
