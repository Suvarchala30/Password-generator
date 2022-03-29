
import { useState } from 'react';
import './App.css';

function App() {
  const [lengthvalue,setLengthvalue]=useState(10)
  const handleLength = (e)=>{
    setLengthvalue(e.target.value)
  }
  return (
    <div className="App">
      <form className="main-block">
        <div className="output">

        </div>
        <div className="input-block">
          <div className="len-block">
          <label htmlFor="password-strength">Password Length</label>
        <input type="number" min="8" className="length" value={lengthvalue} onChange={handleLength} id="password-strength"/>
        </div>
        <div className="check1-block">
        <label htmlFor="check1" className="label1">Include Numbers</label>
        <input type="checkbox" id="check1" value="Include-Numbers" /> 
        </div>
        <div className="check2-block">
        <label htmlFor="check2" className="label1">Include symbols</label>
        <input type="checkbox" id="check2" value="Include-symbols" /> 
        </div>
        <div className="check3-block">
        <label htmlFor="check3" className="label1">Include uppercase</label>
        <input type="checkbox" id="check3" value="Include-uppercase" /> 
        </div>
        <div className="check4-block">
        <label htmlFor="check4" className="label1">Include lowercase</label>
        <input type="checkbox" id="check4" value="Include-lowercase" /> 
        </div>
        <button className="submit-btn">Generate Password</button>
        </div>
      </form>
    </div>
  );
}

export default App;
