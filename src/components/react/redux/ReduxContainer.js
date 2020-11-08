import { connect } from 'react-redux';
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
