import React, {useState} from 'react';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  let increamentCounter = () =>{
    setCounter(counter+1);
  }
  let colorStyle = {color:props['color'],fontSize:props['size']}
    return(
      <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={increamentCounter}>Click Me!</button>
        <br /><br />
        {counter}
      </div>
    );
  }
export default App;