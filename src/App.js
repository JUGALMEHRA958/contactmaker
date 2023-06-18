import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);

  function handleDelete(event, user){
    console.log(event);
    console.log(user);

  }

  function handleEdit(event, user){
    console.log(event);
    console.log(user);
    
  }


  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className='row'> 
      <button>Add contact</button>
      {data.map((user) => (
        <div key={user.id} className="card mt-3 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text">Username: {user.username}</p>
            <button className="btn btn-info me-2" onClick={(e) => { handleEdit(e, user) }}>
              Edit contact
            </button>
            <button className="btn btn-danger" onClick={(e) => { handleDelete(e, user) }}>
              Delete contact
            </button>
          </div>
        </div>
      ))}
    </div></div>
  );
}

export default App;
