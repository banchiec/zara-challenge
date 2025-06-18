import { useEffect, useState } from 'react';
import './App.css';
import { useListPhones } from './hooks';

function App() {
  const [count, setCount] = useState(0);
  const { phones, loading, error } = useListPhones();
  console.log(phones);

  useEffect(() => {
    if (error) {
      console.error('Error fetching phones:', error);
    }
  }, [error]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
