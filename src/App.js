
import './App.css';
import Cons from './components/Cons/cons';
import Pros from './components/Pros/pros';

function App() {
  return (
    <div className="App">
      <header>
    Should I eat at  McDonalds?
     </header>
     <div className='todo'>
     <div className='left-content'>
        <h1>Pros</h1>
        <Pros/>
      </div>
      <div className='right-content'>
        <h1>Cons</h1>
        <Cons/>
      </div>
    </div>
     </div>
     
  );
}

export default App;
