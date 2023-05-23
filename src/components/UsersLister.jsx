import React from 'react'
import Table from 'react-bootstrap/Table';

const UsersLister = ({ users }) => {
    const columnName = Object.keys(users[0]);
    let rowValue = [];
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    {
                        columnName.map((name,index)=>{
                            return(
                                <th key={index}>{name.toUpperCase()}</th>
                            )
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            rowValue = Object.values(user);
                            return(
                                
                                    <tr key={index}>
                                        {
                                            rowValue.map((rowData)=>{
                                                return(
                                                    
                                                        <td key={rowData.id}>{typeof rowData ==='object' ? JSON.stringify(rowData) : rowData}</td>
                                                    
                                                )
                                            })
                                        }
                                    </tr>
                                
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default UsersLister