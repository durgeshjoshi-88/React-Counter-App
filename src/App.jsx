import './App.css'
import FunctionCounter from './FunctionCounter.jsx'
import ClassCounter from './ClassCounter.jsx'
function App() {

  return (
    <div className='main_div'>
      <h1 className="title">Assignment-1 Counter</h1>
      <div className='counter_div'>
        
        <FunctionCounter/>
        <ClassCounter/>
      </div>
      
    </div>
  );
}

export default App
