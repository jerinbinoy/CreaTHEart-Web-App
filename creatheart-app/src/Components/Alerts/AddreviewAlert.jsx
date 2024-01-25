import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function AddreviewAlert(props) {
    const [show, setShow] = useState(true);
    if(props.display === 'true'){
        if(show){

            
    return (
                
                <Alert variant="success" onClose={() => setShow(false)} dismissible className='mt-2'>
        <Alert.Heading>Successfully added your review!</Alert.Heading>
      </Alert>
      )
    }
    }
}

export default AddreviewAlert;