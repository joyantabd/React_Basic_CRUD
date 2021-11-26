import React, { useContext } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import ".//Delete.css" 

const Delete = () => {

    const [users,setUsers] =useContext(UserContext);
    const {id} = useParams()

    const deleteUser = (id)=>{
        const user = users.filter(user=>user.id != id)
        setUsers(user);
    }
    
    const showUser =users.filter((user)=>user.id==id)
  

    return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are you sure ?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
<h2>ID: {showUser[0].id}</h2>
<h2>Name: {showUser[0].name}</h2>
  </Modal.Body>
  

  <Modal.Footer>
      <Link to="/">
    <Button className="delete_btn" variant="secondary">Close</Button>
    <Button className="delete_btn" onClick={() => deleteUser(id)} variant="danger">Delete</Button>
    </Link>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;