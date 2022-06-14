import React from "react";
<<<<<<< HEAD
//import { useNavigate } from "react-router-dom";
=======
>>>>>>> df8472aeff8c93151eeb2334a7533fe7c640a007
import { getClientState } from 'Store/Selector'
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Styledbutton } from "../../Components/Inputs/button";
import { useHistory } from "react-router-dom";
import { Fragment } from "react"; 
function Client() {

  const handleClient = (client = {}) => {
    const { id } = client;
    history.push(`/client/Clientform/${id || ""}`);
  }

  const renderClientItem = (clientID, index) => {
    const { id, name, phoneNumber, address } = raw[clientID] || {};
    return (
      <tbody>
        <tr key={id} >
          <td>{id}</td>
          <td>{name}</td>
          <td>{address}</td>
          <td>{phoneNumber}</td>
          <td><button className="update" onClick={() => {
            handleClient(raw[clientID])
          }}>update</button></td>
        </tr>
      </tbody>
    )
  }

  return (
    <Fragment>
      <Styledbutton className="add" onClick={() => { handleClient() }}>Add</Styledbutton>
      {
         <Table striped bordered hover>
         <thead>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Address</th>
             <th>Phone Number</th>
             <th>Edit</th>
           </tr>
         </thead>
            {
              list?.map(renderClientItem)
            }
          
        </Table>
      }
    </Fragment>
  );
}

export default Client;
