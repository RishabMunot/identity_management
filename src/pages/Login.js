import React from "react";
import { Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";

import { useState, useEffect } from "react";

function Login() {
  var [entity, setEntity] = useState("User");
  var [ethAddress, setEthAddress] = useState();

  function handleEntitySelectionChange(e) {
    console.log(e.target.value);
    setEntity(e.target.value);
  }
  
  function handleEthAddressChange(e) {
    console.log(e.target.value);
    setEthAddress(e.target.value);
  }

  function handleLogin(e){
      //IF AUHENTICATED THEN PROCEED WITH LOGIN LOGIC

      //LOGIN SUCCESS
      window.location.href=`/${entity}`
      //LOGIN FAIL
  }

  return (
    <div>
      <div
        style={{ textAlign: "center", marginTop: "60px" }}
        className="container"
      >
        <h1>Identity Management System on Blockchain</h1>
      </div>

      <div className="container card style-card">
        <h5>Login</h5>
        <Form>
          <Form.Group className="mb-3" id="user_selector">
            <Row>
              <Col>
                <Form.Check
                  onChange={handleEntitySelectionChange}
                  type="radio"
                  label="Admin"
                  value="admin"
                  checked={entity === "admin"}
                  name="radio1"
                  id="radio_admin"
                />
              </Col>
              <Col>
                <Form.Check
                  onChange={handleEntitySelectionChange}
                  type="radio"
                  label="Verifier"
                  value="verifier"
                  checked={entity === "verifier"}
                  name="radio1"
                  id="radio_verifier"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Check
                  onChange={handleEntitySelectionChange}
                  type="radio"
                  label="Modifier"
                  value="modifier"
                  checked={entity === "modifier"}
                  name="radio1"
                  id="radio_modifier"
                />
              </Col>
              <Col>
                <Form.Check
                  onChange={handleEntitySelectionChange}
                  type="radio"
                  label="User"
                  value="user"
                  checked={entity === "user"}
                  name="radio1"
                  id="radio_user"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Ethereum Address</Form.Label>
            <Form.Control placeholder="e.g: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F" value={ethAddress} onChange={handleEthAddressChange} />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <img width="200px" height="200px" src="../../public/logo192.png" />
          </div>
          <Button style={{ marginTop: "16px" }} variant="secondary">
            Stop Validating
          </Button>{" "}
          <Button style={{ marginTop: "16px" }} variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
