import './App.css';
import {Consoler} from 'test';

function App() {

  return (
    <>
      <button onClick ={() => {Consoler.hey()}}>Say hey</button>
      <button onClick ={() => {Consoler.hello()}}>Say hello</button>
    </>
  );
}

export default App;
