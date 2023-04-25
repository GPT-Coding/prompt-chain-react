import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import HelloName from './components/HelloName';
import MerchandiseList from './components/MerchandiseList';
import MerchandiseDetail from './components/MerchandiseDetail';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading……</h2>}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HelloName />
                  <Hello />
                </>
              }
            ></Route>
            <Route path="products" element={<MerchandiseList />}></Route>
            <Route path="/products/:id" element={<MerchandiseDetail />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
