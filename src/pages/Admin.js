import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";

function Admin() {
  var [users, setUsers] = useState([]);

  var [modifiers, setModifiers] = useState([]);

  var [verifiers, setVerifiers] = useState([]);

  var [showNewUserModal, setShowNewUserModal] = useState(false);
  var [showEditUserModal, setShowEditUserModal] = useState(false);

  var [showNewModifierModal, setShowNewModifierModal] = useState(false);
  var [showEditModifierModal, setShowEditModifierModal] = useState(false);

  var [showNewVerifierModal, setShowNewVerifierModal] = useState(false);
  var [showEditVerifierModal, setShowEditVerifierModal] = useState(false);

  var [nuEthAddress, setNuEthAddress] = useState("");
  var [nuName, setNuName] = useState("");
  var [nuDOB, setNuDOB] = useState("");
  var [nuGender, setNuGender] = useState("");
  var [nuPIN, setNuPIN] = useState("");
  var [nuAddress, setNuAddress] = useState("");

  var [euEthAddress, setEuEthAddress] = useState("");
  var [euName, setEuName] = useState("");
  var [euDOB, setEuDOB] = useState("");
  var [euGender, setEuGender] = useState("");
  var [euPIN, setEuPIN] = useState("");
  var [euAddress, setEuAddress] = useState("");

  var [nmEthAddress, setNmEthAddress] = useState("");
  var [nmIdentity, setNmIdentity] = useState("");
  var [emEthAddress, setEmEthAddress] = useState("");
  var [emAadhar, setEmAadhar] = useState(false);
  var [emPAN, setEmPAN] = useState(false);
  var [emLicense, setEmLicense] = useState(false);

  var [nvEthAddress, setNvEthAddress] = useState("");
  var [nvIdentity, setNvIdentity] = useState("");
  var [evEthAddress, setEvEthAddress] = useState("");
  var [evAadhar, setEvAadhar] = useState(false);
  var [evPAN, setEvPAN] = useState(false);
  var [evLicense, setEvLicense] = useState(false);

  function handleUserClicked(user) {
    setEuEthAddress(user.eth_address);
    setEuName(user.name);
    setEuDOB(user.date_of_birth);
    setEuAddress(user.permanent_address);
    setEuGender(user.gender);
    setShowEditUserModal(true);
  }

  function handleNewUserButtonClicked() {
    setShowNewUserModal(true);
  }
  function handleNewUserClose() {
    setNuAddress("");
    setNuName("");
    setNuPIN("");
    setNuEthAddress("");
    setNuDOB("");
    setNuGender("");
    setShowNewUserModal(false);
  }

  function handleCreateUser() {
    console.log("NEW USER CREATED");
  }

  function handleEditUserClose() {
    setShowEditUserModal(false);
  }

  function handleEditUser() {
    console.log("USER EDITED");
  }

  function handleUserDeleteClicked(user) {
    console.log("Delete user: " + user.eth_address);
  }

  function handleModifierClicked(modifier) {
    setEmAadhar(modifier.aadhar);
    setEmPAN(modifier.pan);
    setEmLicense(modifier.license);
    setEmEthAddress(modifier.eth_address);
    setShowEditModifierModal(true);
  }

  function handleNewModifierButtonClicked(e) {
    setShowNewModifierModal(true);
  }

  function handleNewVerifierButtonClicked(e) {
    setShowNewVerifierModal(true);
  }
  function handleCreateModifier(e) {
    console.log("CREATE MODIFIER");
  }

  function handleEditModifier(e) {
    console.log("EDIT MODIFIER");
  }

  function handleEditVerifier(e) {
    console.log("EDIT VERIFIER");
  }

  function handleNewModifierClose() {
    setShowNewModifierModal(false);
  }

  function handleNewVerifierClose() {
    setShowNewVerifierModal(false);
  }

  function handleEditVerifierClose() {
    setShowEditVerifierModal(false);
  }

  function handleModifierDeleteClicked(user) {
    console.log("Delete user: " + user.eth_address);
  }

  function handleVerifierClicked(verifier) {
    setEvAadhar(verifier.aadhar);
    setEvPAN(verifier.pan);
    setEvLicense(verifier.license);
    setEvEthAddress(verifier.eth_address);
    setShowEditVerifierModal(true);

  }

  function handleVerifierDeleteClicked(user) {
    console.log("Delete user: " + user.eth_address);
  }

  function handleCreateVerifier(e) {
    console.log("CREATE VERIFIER");
  }

  function nEthAddChange(e) {
    setNuEthAddress(e.target.value);
  }

  function nNameChange(e) {
    setNuName(e.target.value);
  }

  function nDOBChange(e) {
    setNuDOB(e.target.value);
  }

  function nGenderChange(e) {
    setNuGender(e.target.value);
  }

  function nAddressChange(e) {
    setNuAddress(e.target.value);
  }

  function nPINChange(e) {
    setNuPIN(e.target.value);
  }

  function eEthAddChange(e) {
    setEuEthAddress(e.target.value);
  }

  function eNameChange(e) {
    setEuName(e.target.value);
  }

  function eDOBChange(e) {
    setEuDOB(e.target.value);
  }

  function eGenderChange(e) {
    setEuGender(e.target.value);
  }

  function eAddressChange(e) {
    setEuAddress(e.target.value);
  }

  function ePINChange(e) {
    setEuPIN(e.target.value);
  }

  function handleIdentitySelect(e) {
    setNmIdentity(e.target.value);
  }
  function nmEthAddressChange(e) {
    setNmEthAddress(e.target.value);
  }
  function nvEthAddressChange(e) {
    setNvEthAddress(e.target.value);
  }
  function handleVerifierIdentityChoose(e) {
    setNvIdentity(e.target.value);
  }

  function handleEditModifierClose() {
    setShowEditModifierModal(false);
  }

  function handleEmAadharChanged(e){
    setEmAadhar(e.target.checked)
}
function handleEmPanChanged(e){
    setEmPAN(e.target.checked)


}
function handleEmLicenseChanged(e){
    setEmLicense(e.target.checked)

}

function handleEvAadharChanged(e){
    setEvAadhar(e.target.checked)
}
function handleEvPanChanged(e){
    setEvPAN(e.target.checked)


}
function handleEvLicenseChanged(e){
    setEvLicense(e.target.checked)

}

  

  useEffect(() => {
    //   get users, modifiers, verifiers from blockchain
    setUsers([
      {
        eth_address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        name: "Rishab Munot",
        date_of_birth: "23/05/1999",
        gender: "Male",
        permanent_address: "Baramati, Pune",
        pan: {},
        aadhar: {},
        license: {},
      },
    ]);

    setModifiers([
      {
        eth_address: "0xMODI656EC7ab88b098defB751B7401B5f6d8976F",
        pan: true,
        aadhar: true,
        license: false,
      },
    ]);

    setVerifiers([
      {
        eth_address: "0xVERI56EC7ab88b098defB751B7401B5f6d8976F",
        pan: true,
        aadhar: true,
        license: false,
      },
    ]);
  }, []);

  return (
    <div>
      <div
        style={{ textAlign: "center", marginTop: "60px" }}
        className="container"
      >
        <h1>Identity Management System on Blockchain</h1>
      </div>

      <div className="container card style-window">
        <h5>Admin Portal</h5>

        {/* User list */}
        <div
          style={{
            paddingLeft: "40px",
            marginTop: "20px",
            paddingRight: "40px",
          }}
        >
          <h6>Users:</h6>
          <Table hover>
            <tbody>
              {users.map((user) => {
                return (
                  <tr
                    onClick={() => {
                      handleUserClicked(user);
                    }}
                  >
                    <td width="400px">{user.eth_address}</td>
                    <td>{user.name}</td>
                    <td width="40px">
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleUserClicked(user);
                        }}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                    </td>
                    <td width="40px">
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleUserDeleteClicked(user);
                        }}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={handleNewUserButtonClicked}>Add new user</Button>
        </div>

        {/* Verifier list */}
        <div
          style={{
            paddingLeft: "40px",
            marginTop: "40px",
            paddingRight: "40px",
          }}
        >
          <h6>Verifiers:</h6>
          <Table hover>
            <tbody>
              {verifiers.map((verifier) => {
                return (
                  <tr
                    onClick={() => {
                      handleVerifierClicked(verifier);
                    }}
                  >
                    <td width="400px">{verifier.eth_address}</td>
                    <td>{verifier.name}</td>
                    <td width="40px">
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleVerifierClicked(verifier);
                        }}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                    </td>
                    <td width="40px">
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleVerifierDeleteClicked(verifier);
                        }}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={handleNewVerifierButtonClicked}>
            Add new verifier
          </Button>
        </div>

        {/* Modifier list */}
        <div
          style={{
            paddingLeft: "40px",
            marginTop: "40px",
            paddingRight: "40px",
          }}
        >
          <h6>Modifiers:</h6>
          <Table hover>
            <tbody>
              {modifiers.map((modifier) => {
                return (
                  <tr
                    onClick={() => {
                      handleModifierClicked(modifier);
                    }}
                  >
                    <td width="400px">
                      {modifier.eth_address}
                      <br />
                      {modifier.aadhar ? (
                        <small style={{ marginRight: "8px" }}>Aadhar</small>
                      ) : null}
                      {modifier.pan ? (
                        <small style={{ marginRight: "8px" }}>PAN</small>
                      ) : null}
                      {modifier.license ? (
                        <small style={{ marginRight: "8px" }}>License</small>
                      ) : null}
                    </td>
                    <td>{modifier.name}</td>
                    <td width="40px">
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleModifierClicked(modifier);
                        }}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                    </td>
                    <td width="40px">
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleModifierDeleteClicked(modifier);
                        }}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={handleNewModifierButtonClicked}>
            Add new modifier
          </Button>
        </div>
      </div>

      {/* NEW USER FORM */}
      <Modal show={showNewUserModal} onHide={handleNewUserClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Ethereum Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  value={nuEthAddress}
                  onChange={nEthAddChange}
                  placeholder="Ethereum Address"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Name"
                  value={nuName}
                  onChange={nNameChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Date of Birth
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Date of Birth"
                  value={nuDOB}
                  onChange={nDOBChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Gender
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Gender"
                  value={nuGender}
                  onChange={nGenderChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Address"
                  value={nuAddress}
                  onChange={nAddressChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={4}>
                6-digit PIN
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="password"
                  placeholder="6-digit PIN"
                  value={nuPIN}
                  onChange={nPINChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewUserClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateUser}>
            Create new user
          </Button>
        </Modal.Footer>
      </Modal>

      {/* EDIT USER FORM */}
      <Modal show={showEditUserModal} onHide={handleEditUserClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Ethereum Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  value={euEthAddress}
                  onChange={eEthAddChange}
                  placeholder="Ethereum Address"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Name"
                  value={euName}
                  onChange={eNameChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Date of Birth
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Date of Birth"
                  value={euDOB}
                  onChange={eDOBChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Gender
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Gender"
                  value={euGender}
                  onChange={eGenderChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  placeholder="Address"
                  value={euAddress}
                  onChange={eAddressChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={4}>
                6-digit PIN
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="password"
                  placeholder="6-digit PIN"
                  value={euPIN}
                  onChange={ePINChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditUserClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditUser}>
            Edit user
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CREATE MODIFIER FORM */}
      <Modal show={showNewModifierModal} onHide={handleNewModifierClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Ethereum Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  value={nmEthAddress}
                  onChange={nmEthAddressChange}
                  placeholder="Ethereum Address"
                />
              </Col>
            </Form.Group>

            <Form.Select
              onChange={handleIdentitySelect}
              aria-label="Default select example"
            >
              <option>Select Identity</option>
              <option value="aadhar">Aadhar</option>
              <option value="pan">PAN</option>
              <option value="license">License</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewModifierClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateModifier}>
            Create modifier
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODIFIER EDIT ACCESS */}
      <Modal show={showEditModifierModal} onHide={handleEditModifierClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Modifier Access</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                {emEthAddress}
              </Form.Label>
            </Form.Group>

            <Form.Check
              checked={emAadhar}
              onChange={handleEmAadharChanged}
              type="switch"
              id="switch-aadhar"
              label="Aadhar"
            />
            <Form.Check
              checked={emPAN}
              type="switch"
              onChange={handleEmPanChanged}
              id="switch-pan"
              label="PAN"
            />
            <Form.Check
              checked={emLicense}
              type="switch"
              id="switch-license"
              onChange={handleEmLicenseChanged}
              label="License"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewModifierClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditModifier}>
            Edit modifier access
          </Button>
        </Modal.Footer>
      </Modal>

      {/* VERIFIER CREATE */}
      <Modal show={showNewVerifierModal} onHide={handleNewVerifierClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Verifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                Ethereum Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  value={nvEthAddress}
                  onChange={nvEthAddressChange}
                  placeholder="Ethereum Address"
                />
              </Col>
            </Form.Group>

            <Form.Select
              onChange={handleVerifierIdentityChoose}
              aria-label="Default select example"
            >
              <option>Select Identity</option>
              <option value="aadhar">Aadhar</option>
              <option value="pan">PAN</option>
              <option value="license">License</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewVerifierClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateVerifier}>
            Create Verifier
          </Button>
        </Modal.Footer>
      </Modal>

      {/* VERIFIER EDIT ACCESS */}
      <Modal show={showEditVerifierModal} onHide={handleEditVerifierClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Verifier Access</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={4}>
                {evEthAddress}
              </Form.Label>
            </Form.Group>

            <Form.Check
              checked={evAadhar}
              onChange={handleEmAadharChanged}
              type="switch"
              id="switch-aadhar"
              label="Aadhar"
            />
            <Form.Check
              checked={evPAN}
              type="switch"
              onChange={handleEmPanChanged}
              id="switch-pan"
              label="PAN"
            />
            <Form.Check
              checked={evLicense}
              type="switch"
              id="switch-license"
              onChange={handleEmLicenseChanged}
              label="License"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewVerifierClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditModifier}>
            Edit verifier access
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
