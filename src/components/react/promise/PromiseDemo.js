import React, { useState, useEffect } from 'react';

const PromiseDemo = () => {
  const [word, setWord] = useState('');

  const loadContent = () => {
    let content = 'hello world';
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(content);
      }, 2000);
    });
    return promise;
  };

  useEffect(() => {
    async function fetchData() {
      const content = await loadContent();
      setWord(content);
    }
    fetchData();
  }, [word]);

  return (
    <div className="d-flex flex-column align-items-center">
      {word}
      <button className="w-25" onClick={() => setWord('reloading...')}>
        redo
      </button>
    </div>
  );
};

export default PromiseDemo;
