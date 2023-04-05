import { Suspense } from 'react';
import './App.css';
import Hello from './components/Hello';
import HelloName from './components/HelloName';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading……</h2>}>
        <HelloName />
        <Hello />
      </Suspense>
    </div>
  );
}

export default App;
