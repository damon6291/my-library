import React from 'react';
import Format from '../../Format';

const git = `npm install serve --s
git add .
git commit -m "heroku"
heroku login
heroku create
git push heroku master
heroku open
git push`;
const json1 = `package.json
"scripts": {
  "dev": "react-scripts start",
  "start": "serve -s build",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject",
  "heroku-postbuild": "npm run build"
},`;

const json = [
  {
    language: 'git',
    code: git,
  },
  { language: 'json', code: json1 },
];

const Heroku = () => {
  return <Format json={json} />;
};

export default Heroku;
