import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function UsersLogin() {
    
    const [show, setShow] = useState(true);
    const [alert, setAlert] = useState();
    const provider = new GoogleAuthProvider();

    const handleClose = () => setShow(false);
    const requestLogin = () => { 
        
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            setAlert(<Alert variant='success'>Signed In successfully!</Alert>)
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
     }

     

  return (
    <div>
        
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-grid'>
                {alert ? alert : <Button variant="primary" onClick={requestLogin} className='mb-3'>
                    Login using Google
                </Button>}
                {alert ? <Button variant="primary" onClick={handleClose}>
                    Add Review
                </Button> : <Button variant="outline-danger" onClick={handleClose}>
                    Cancel
                </Button>}
                
                </Modal.Body>
            </Modal>
            
        </>
          
    </div>
  )
}

export default UsersLogin