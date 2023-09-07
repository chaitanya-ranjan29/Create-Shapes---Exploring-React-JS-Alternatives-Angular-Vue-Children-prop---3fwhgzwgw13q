import React from 'react'
import {useState} from 'react';
import '../styles/App.css';

const App = () => {

  const [shape, setShape] = useState("square");
  const [shapesArr, setShapesArr] = useState([]);

  // console.log(shape);
  // console.log(shapesArr);
  function handleShape(e) {
    const {value} = e.target;
    // console.log(value);
    setShape(value);
  }

  function handleShapesArr() {
    setShapesArr((prevArr) => (
      [...prevArr, shape]
    ))
  }
  
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleShape}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleShapesArr}>Add Shape</button>
      </div>
    
      <div id="shapes-holder">
				{shapesArr.map((element, index) => (
          <div key={index} className={element}>{index}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
