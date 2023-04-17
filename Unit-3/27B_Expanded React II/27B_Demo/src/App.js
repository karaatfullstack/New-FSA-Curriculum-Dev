import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Fetching Data From API</h1>
      {data.map(item => (
        <div key={item.id}>
           
          <ul>
          <li><span class="label">Name:</span>{item.name}</li>
          <li><span class="label">Username:</span>{item.username}</li>
          <li><span class="label">E-mail:</span>{item.email}</li>
          <li><span class="label">Phone:</span>{item.phone}</li>
          <li><span class="label">Website:</span>{item.website}</li>
          <li><span class="label">Company Name:</span>{item.company.name}</li>
          <li><span class="label">City:</span>{item.address.city}</li>
          <li><span class="label">Zipcode:</span>{item.address.zipcode}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;