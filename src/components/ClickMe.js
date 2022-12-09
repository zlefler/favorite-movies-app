import React, { useState } from 'react';

function ClickMe() {
  const [adder, setAdder] = useState('');
  const [sum, setSum] = useState(0);

  function onSubmit(e) {
    e.preventDefault();
    console.log(adder);
    setSum(sum + adder.length);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={adder}
          onChange={(e) => setAdder(e.target.value)}
          type="text"
        />
        <button type="submit">Click Me!</button>
      </form>
      <p>{sum}</p>
    </div>
  );
}

export default ClickMe;
