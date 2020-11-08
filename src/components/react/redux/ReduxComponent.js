import React, { useEffect } from 'react';

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
