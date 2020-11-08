import { CREATE_MODULE, FIND_MODULES_FOR_COURSE } from './ReduxAction';

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
