import React from 'react';
import Format from '../../Format';
import FormatCardDemo from './FormatCardDemo';

const json = [
  {
    code: `import React from 'react';
import Card from './Card';

const FormatCardDemo = () => {
  const courses = [
    {title: 'title1'},
    {title: 'title2'},
    {title: 'title3'},
    {title: 'title4'},
    {title: 'title5'},
  ];

  return (
    <div className="row">
      {courses.map((course, id) => (
        <Card key={id} course={course} />
      ))}
    </div>
  );
};

export default FormatCardDemo;`,
  },
  {
    code: `import React from 'react';

const Card = ({course: {title}}) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
      <div className="border ">{title}</div>
    </div>
  );
};

export default Card;`,
  },
];

const FormatCard = () => {
  return <Format Demo={FormatCardDemo} json={json} />;
};

export default FormatCard;
