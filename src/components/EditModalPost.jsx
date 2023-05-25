import React from 'react';  
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EditModalPost = ({show,handleEditPostChanges,handleClose,editValue,changeHandlerPost}) => {
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Posts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="Title">Title</label>
            <input className='form-control m-1' placeholder='Product Title' name='title' value={editValue.title} onChange={changeHandlerPost}></input>
            <label htmlFor="Body">Description</label>
            <input className='form-control m-1' placeholder='Product Description' name='body' value={editValue.body} onChange={changeHandlerPost}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditPostChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default EditModalPost;