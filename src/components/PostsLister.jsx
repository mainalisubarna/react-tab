import React from 'react';
import Table from 'react-bootstrap/Table';

const PostsLister = ({posts}) => {
    console.log(posts)
    const columnName = Object.keys(posts[0]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {
            columnName.map((column,index)=>{ 
                return (
                    <td key={index}>{column.toUpperCase()}</td>
                )
          })
          }
        </tr>
      </thead>
      <tbody>
        {
            posts.map((rowValue,index)=>{
                return(
                    <tr key={index}>
                        {
                            Object.values(rowValue).map((rowData)=>{
                                return(
                                    <td key={rowData.id}>{rowData}</td>
                                )
                            })
                        }
                    </tr>
                )
            })
        }
      </tbody>
    </Table>
  )
}

export default PostsLister