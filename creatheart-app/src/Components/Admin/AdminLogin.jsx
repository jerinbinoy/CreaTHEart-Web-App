import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Admin from './Admin.jsx';
import Alert from 'react-bootstrap/Alert';

function AdminLogin() {

    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminPanel, setAdminPanel] = useState(false);
    const [alert, setAlert] = useState()

    const handleClose = () => setShow(false);
    const requestLogin = () => { 
        
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //alert(user.email + 'Sign in successful!');
                setShow(false);
                setAlert(<Alert variant='success'>{user.email+ ''+'Sign in Successful'}</Alert>)
                setAdminPanel(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAlert(<Alert variant='danger'>{errorCode}</Alert>);
            });
     }

  return (
    <div>
        
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Admin Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    </Form.Group>
                </Form>
                {alert}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={requestLogin}>
                    Login
                </Button>
                </Modal.Footer>
            </Modal>
            {adminPanel ? <Admin /> : null}
        </>
          
    </div>
  )
}

export default AdminLogin