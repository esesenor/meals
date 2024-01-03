import { useState } from 'react';
import './App.css';
import HeaderMeals from './components/layout/HeaderMeals';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <HeaderMeals />
    </main>
  );
}

export default App;
