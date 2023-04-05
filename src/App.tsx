import { Suspense } from 'react';
import './App.css';
import Hello from './components/Hello';
import HelloName from './components/HelloName';

function App() {
  return (
    <div className="App">
      <HelloName />
      <Hello />
    </div>
  );
}

export default App;
