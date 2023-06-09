import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/prueba')  
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Home;