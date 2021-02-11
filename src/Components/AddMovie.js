import React, { useState } from 'react';
import {Button,Modal,Form} from'react-bootstrap';

const AddMovie = ({addMovie}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('')
    const [posterURL, setPosterURL] = useState('')
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0)
    return (
        <div>
            
      <Button variant="primary" onClick={handleShow}>
                Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie title" onChange={(e)=>setTitle(e.target.value)} />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>posterURl</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie posterURL" onChange={(e)=>setPosterURL(e.target.value)} />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie description" onChange={(e)=>setDescription(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Rate</Form.Label>
    <Form.Control type="number" placeholder="Enter the movie rate"  onChange={(e)=>setRate(e.target.value)}/>
  </Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(title,posterURL,description,rate);setShow(false)}}>
                Add movie  
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
