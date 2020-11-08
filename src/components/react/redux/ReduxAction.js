export const CREATE_MODULE = 'CREATE_MODULE';
export const FIND_MODULES_FOR_COURSE = 'FIND_MODULE_FOR_COURSE';

export const createModule = (dispatch, module) => dispatch({ type: CREATE_MODULE, module });

export const findModulesForCourse = (dispatch, module) =>
  dispatch({
    type: FIND_MODULES_FOR_COURSE,
    module,
  });
