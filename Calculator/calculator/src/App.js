import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [history, setHistory] = useState('');

  function addToHistory(addStr){
    setHistory((history) => history += ' ' + addStr + ' ' + Number(inputRef.current.value));
  };
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    addToHistory('+');
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result)=> result - Number(inputRef.current.value)); 
    addToHistory("-");
  };
 
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    addToHistory('x');
  }; 
 
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  addToHistory('÷');
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function
    e.preventDefault();
    if (inputRef.current){
      inputRef.current.value=''
    }
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
    setHistory('');
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p>0 {history}</p>
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
