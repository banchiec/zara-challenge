import { useEffect } from 'react';
import { useListPhones } from './hooks';

function App() {
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
      <div className="card">
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
