import React from 'react';  
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const AddModal = ({show,handleAddProduct,addChangeHandler,handleAddClose}) => {
  return (
    <>
     <Modal show={show} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input className='form-control m-1' placeholder='Product Title' name='title'onChange={addChangeHandler}></input>
            <input className='form-control m-1' placeholder='Product Description' name='description' onChange={addChangeHandler}></input>
            <input className='form-control m-1' placeholder='Product thumbnail' name='thumbnail' onChange={addChangeHandler}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default AddModal