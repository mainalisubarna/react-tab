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
                            columnName.map((name) => {
                                return (
                                    <th key={name}>{name.toUpperCase()}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            rowValue = Object.values(user);
                            return (
                                <tr key={user.id}>
                                    {
                                        rowValue.map((rowData, index) => {
                                            return (

                                                <td key={index}>{typeof rowData === 'object' ? JSON.stringify(rowData) : rowData}</td>

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