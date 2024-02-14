import { useState} from 'react';
import Table from 'react-bootstrap/Table';
import { collection,getDocs} from "firebase/firestore";
import {FirebaseApp} from '../../Firebase/config';

function UsersTable() {

const [usersData, setUsersData] = useState([]);
const totalRowsUsers = [];
let [number,setNumber] = useState(0);

async function handleclick(){
    const querySnapshot = await getDocs(collection(FirebaseApp,"Users"));
    setUsersData(querySnapshot);

        }
        handleclick(); 
        
 usersData.forEach((data) => {
            //setNumber(number += 1)
            let Data = data.data();
            totalRowsUsers.push(
                    <tr>
                    <td>{number}</td>
                    <td>{Data.Name}</td>
                    <td>{Data.Email}</td>
                    <td>{Data.PhoneNumber}</td>
                    <td>{Data.Date}</td>
                    <td>{Data.Uid}</td>
                    <td>{Data.photoURL}</td>
                    </tr>
                    )
                });
    
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date Joined</th>
          <th>Uid</th>
          <th>Photo URL</th>
        </tr>
      </thead>
      <tbody>
        {totalRowsUsers}
        
      </tbody>
    </Table>
  );
}

export default UsersTable;