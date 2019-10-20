import React, { useState } from 'react';


const names = ['vasa', 'pitya', 'alex', 'an'];


const render = names.reduce((ak, name, i) => {
  if (name !== 'pitya'){
    ak.push(<p key={i}>{name}</p>)
    return ak;
  }
  return ak;
}, []);

 console.log(render);

function App() {

  const [res, setRes] = useState('hello');
  
const show = () => {
  setRes(res + ' world');
}


  return (
    <div id="app">
      <h2 onClick={show}>Hello app</h2>
      {res}
    </div>
  );
}

export default App;
