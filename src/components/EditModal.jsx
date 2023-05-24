import React from 'react';  
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EditModal = ({show,handleEditChanges,handleClose,editValue,changeHandler}) => {
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input className='form-control m-1' placeholder='Product Title' name='title' value={editValue.title} onChange={changeHandler}></input>
            <input className='form-control m-1' placeholder='Product Description' name='description' value={editValue.description} onChange={changeHandler}></input>
            <input className='form-control m-1' placeholder='Product thumbnail' name='thumbnail' value={editValue.thumbnail} onChange={changeHandler}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default EditModal