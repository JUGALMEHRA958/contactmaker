import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="App">
      <button>Add contact</button>
      {data.map((user) => {
        return (
          <div key={user.id}>
            Name: {user.name}<br></br>
            Username: {user.username}
            <button onClick={(e)=>{handleEdit(e , user)}}>Edit contact</button>
            <button onClick={(e)=>{handleDelete(e , user)}}>Delete contact</button>

          </div>
        );
      })}
    </div>
  );
}

export default App;
