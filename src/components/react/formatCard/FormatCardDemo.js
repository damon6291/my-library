import React from 'react';
import Card from './Card';

const FormatCardDemo = () => {
  const courses = [
    { title: 'title1' },
    { title: 'title2' },
    { title: 'title3' },
    { title: 'title4' },
    { title: 'title5' },
  ];

  return (
    <div className="row">
      {courses.map((course, id) => (
        <Card key={id} course={course} />
      ))}
    </div>
  );
};

export default FormatCardDemo;
