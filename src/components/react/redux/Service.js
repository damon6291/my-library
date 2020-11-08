const createUrl = (courseId) => {
  return `https://wbdv-generic-server.herokuapp.com/api/damon/courses/${courseId}/modules`;
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
