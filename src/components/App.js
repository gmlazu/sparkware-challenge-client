import React, {useEffect, useState} from 'react';
import axios from "axios";
import Details from "./Details";
import Form from "./UserForm";
import {Container, Row, Col, Alert} from "react-bootstrap";
import UserIDForm from "./UserIDForm";

function App() {
    const [error, setError] = useState(false);
    const showError = (message) => {
        setError(message);
    }
    const [user, setUser] = useState({
      id: 1,
      firstName: "",
      lastName: "",
      userName: "",
      dateOfBirth: ""
    });
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        dateOfBirth: ""
    })

  // Fetch data
  const userHook = () => {
      axios
          .get(`http://localhost:3001/user?id=${user.id}`)
          .then(response => {
              setUser(response.data)
              setNewUser(response.data);
          })
          .catch(e => showError(e.message));
  };
  useEffect(userHook, []);

  return (
    <Container>
        <Row className="mt-5">
            <Col xs={6}>
                { error ?
                    <Row>
                        <Alert variant='danger'>{error}</Alert>
                    </Row>
                : null }
                <Row>
                    <UserIDForm
                        user={user} setUser={setUser}
                        userHook={userHook} setError={setError}/>
                </Row>
                <Row>
                    <Details
                        user={user}
                    />
                </Row>
            </Col>
            <Col xs={6}>
                <Form
                    user={newUser}
                    setUser={setNewUser}
                />
            </Col>
        </Row>
    </Container>
  );
}

export default App;
