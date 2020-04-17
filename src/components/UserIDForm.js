import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Alert, FormControl, InputGroup} from "react-bootstrap";
import axios from "axios";


function UserIDForm({user, setUser, userHook, setError}) {

    const onInputChange = (event) => {
        // Clear error
        setError(false);

        const key = event.target.name;
        const value = event.target.value;

        setUser({
            ...user,
            [key]: value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        userHook();
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicFirstName">
                <InputGroup>
                    <FormControl
                        type="text" name="id"
                        placeholder="Id"
                        value={user.id}
                        onChange={onInputChange}
                    />
                    <InputGroup.Append>
                        <Button variant="primary" type="submit">GO</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default UserIDForm;
