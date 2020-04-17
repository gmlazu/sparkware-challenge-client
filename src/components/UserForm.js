import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Alert} from "react-bootstrap";
import DatePicker from 'react-date-picker';


function UserForm({user, setUser}) {
    const [error, setError] = useState(false);
    const onFormSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3001/user', user)
            .then(response => setUser(response.data))
            .catch(e => showError(e.response.data.error));
    }
    const showError = (message) => {
        setError(message);
    }
    const onUsernameBlur = (event) => {
        const username = event.target.value;

        if (username.toLowerCase().includes(user.firstName.toLowerCase()) ||
            username.toLowerCase().includes(user.lastName.toLowerCase())) {
            showError("Username cannot contain your first name or last name.")
        } else {
            setError(false); // Hide error
        }
    }
    const onInputChange = (event) => {
        // Clear out any errors
        setError(false);

        const key = event.target.name;
        const value = event.target.value;

        setUser({
            ...user,
            [key]: value
        })
    }

    return (
        <Form onSubmit={onFormSubmit}>
            { error ? <Alert variant='danger'>{error}</Alert> : null }
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text" name="firstName"
                    value={user.firstName}
                    onChange={onInputChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text" name="lastName"
                    value={user.lastName}
                    onChange={onInputChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicUserName">
                <Form.Label>User name</Form.Label>
                <Form.Control
                    type="text" name="userName"
                    value={user.userName}
                    onChange={onInputChange}
                    onBlur={onUsernameBlur}/>
            </Form.Group>

            <Form.Group controlId="formBasicDateOfBirth">
                <Form.Label>Date of birth</Form.Label>
                <DatePicker
                    value={user.dateOfBirth ? new Date(user.dateOfBirth) : new Date()}
                    onChange={date => onInputChange({ target: { name: "dateOfBirth", value: date } })}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default UserForm;
