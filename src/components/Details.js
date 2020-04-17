import React from 'react';
import {Table} from "react-bootstrap";

function Details({user}) {
    return (
        <Table striped bordered hover size="sm">
            <tbody>
                <tr>
                    <td>First name:</td>
                    <td>{user.firstName}</td>
                </tr>
                <tr>
                    <td>Last name:</td>
                    <td>{user.lastName}</td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td>{user.userName}</td>
                </tr>
                <tr>
                    <td>Date of birth:</td>
                    <td>{user.dateOfBirth}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Details;
