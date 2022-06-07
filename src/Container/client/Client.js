import React from "react";
import { useNavigate } from "react-router-dom";
import { getClientState } from 'Store/Selector'
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

function Client() {
//   const navigate = useNavigate();
//   const { list, raw } = useSelector(getClientState);

//   const handleClient = (client = {}) => {
//     const { id } = client;
//     navigate(`/client/${id || ""}`);
//   }

//   const renderClientItem = (clientID, index) => {
//     const { id, name, phoneNumber, address } = raw[clientID] || {};
//     return (
//       <tbody>
//       <tr key={id} >
//         <td>{id}</td>
//         <td>{name}</td>
//         <td>{address}</td>
//         <td>{phoneNumber}</td>
//         <td><button className="update" onClick={() => {
//           handleClient(raw[clientID])
//         }}>update</button></td>
//       </tr>
//       </tbody>
//     )
//   }

  return (
    <div className="client">
      {/* <Styledbutton className="add" onClick={() => { handleClient() }}>Add</Styledbutton> */}
     
     <div className="list">
      {
         <Table striped bordered hover variant="dark">
         <thead>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Address</th>
             <th>Phone Number</th>
             <th>Edit</th>
           </tr>
         </thead>
            {/* {
              list?.map(renderClientItem)
            } */}
          
        </Table>
      }
      </div>
    </div>
  );
}

export default Client;
