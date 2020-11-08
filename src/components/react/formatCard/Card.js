import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ course: { title } }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
      <div className="border">{title}</div>
    </div>
  );
};

export default Card;
