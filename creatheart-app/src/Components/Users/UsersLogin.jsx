import React from 'react';
import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import {FirebaseApp} from '../../Firebase/config';
import {AuthContext} from '../../Context/AuthContext'
 

function UsersLogin() {
    
    const [show, setShow] = useState(true);
    const [alert, setAlert] = useState();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);

    const handleClose = () => {
      setShow(false);
      navigate('/');
    }
    const requestLogin = (e) => { 
        e.preventDefault();
        const auth = getAuth();
        signInWithRedirect(auth, provider)
        //signInWithPopup(auth, provider)
        getRedirectResult(auth)
          .then((result) => {
            
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log(user);
            userDataAssign(user);
            setUser(user);
            setAlert(<Alert variant='success'>Signed In successfully!</Alert>)
            navigate('/');
            
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            setAlert(<Alert variant='danger'>{errorCode}</Alert>)
          });
     }
async function userDataAssign(user){
      //setLoading(true);
      console.log(user);
        const d = new Date();
         let year = d.getFullYear();
         let month = d.getMonth();
         let date = d.getDate();
         let fullDate = date+"/"+month+'/'+year;
  await setDoc(doc(FirebaseApp, "Users",user.uid), {
          Name: user.displayName,
          Email: user.email,
          Uid: user.uid,
          Date: fullDate,
          AccessToken: user.accessToken,
          PhoneNumber: user.phoneNumber,
          photoURL: user.photoURL
        });
        
        //setLoading(false);
      }
     

  return (
    <div>
        
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Signup and Login</Modal.Title>
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