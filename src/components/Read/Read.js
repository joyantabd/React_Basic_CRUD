import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import { Button } from 'react-bootstrap';
import ".//Read.css"

const Read = () => {
    const [users] = useContext(UserContext)
    const {id} = useParams();
    const user = users.filter((user)=>user.id == id);

    console.log(user);

    return (
        <div className="read">
      <p>
          <h1>ID:{user[0].id}</h1>
          <h1>Name:{user[0].name}</h1>
          <h1>Position:{user[0].position}</h1>
          <h1>Salary:{user[0].salary}</h1>
      </p>
      <Link to="/">
     <Button variant='info'>Back to Home</Button>
     </Link>
         
        </div>
    );
};

export default Read;