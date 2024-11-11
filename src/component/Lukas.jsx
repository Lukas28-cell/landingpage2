import React, { useEffect, useState } from 'react';

const Lukas = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const display = async () => {
                    // To fetch error in the API
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response not ok!');
        }
                    // To convert the Api to Json Forma
        const result = await response.json();
        // to display it in the browser
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    display();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center p-3'>
      {data.map((val, index) => (
        <div key={index}>
          <img src={val.image} alt={val.id} className=' w-52' />
          <p>{val.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Lukas;
