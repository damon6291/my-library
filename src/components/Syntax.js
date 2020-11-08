import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

export const Code = (language, code) => {
  return (
    <SyntaxHighlighter language={language} style={prism}>
      {code}
    </SyntaxHighlighter>
  );
};

export const Link = (code) => {
  return (
    <a
      style={{
        background: 'rgb(245, 242, 240)',
        tabSize: 4,
        padding: '1em',
        margin: '0.5em 0px',
        color: 'black',
        display: 'block',
      }}
      href={code}>
      {code}
    </a>
  );
};
