import React from 'react';
import Table from 'react-bootstrap/Table';

const PostsLister = ({ posts ,editButtonPost,deleteButtonPost}) => {
  const columnName = Object.keys(posts[0]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {
            columnName.map((column) => {
              return (
                <td key={column}>{column.toUpperCase()}</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          posts.map((rowValue, index) => {
            return (
              <>
              <tr key={rowValue.id}>
                {
                  Object.values(rowValue).map((rowData,index) => {
                    return (
                      <>
                        <td key={index}>{rowData}</td>
                      </>
                    )
                  })
                }
                <td><div className='d-flex justify-content-evenly'><button className='btn btn-sm btn-primary m-0' onClick={(e) =>editButtonPost(e,rowValue)}>Edit</button>
                <button className='btn btn-sm btn-danger m-0' onClick={(e)=>deleteButtonPost(e,rowValue)}>Delete</button></div></td>
              </tr>
              </>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default PostsLister