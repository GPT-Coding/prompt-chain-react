import { Suspense } from 'react';
import './App.css';
import Hello from './components/Hello';
import HelloName from './components/HelloName';
import MerchandiseList from './components/MerchandiseList';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading……</h2>}>
        <HelloName />
        <Hello />
        <MerchandiseList />
      </Suspense>
    </div>
  );
}

export default App;
