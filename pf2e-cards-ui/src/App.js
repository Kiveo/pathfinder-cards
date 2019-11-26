import React, { useState, useEffect } from 'react';

const App = () => {
  // -- lifecycles and hooks --
  const [sample, setSample] = useState(0);
  const [next, setNext] = useState(0);
  useEffect(() => {
    setNext(sample + 1);
  }, [sample]);

  // -- RENDER --
  return (
    <div>
      <button type="button" onClick={() => setSample(sample + 1)}>
        Increment Hook State
      </button>
      <hr />
      Sample:
      {sample}
      <br />
      {`Next: ${next}`}
    </div>
  );
};

export default App;
