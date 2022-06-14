import React from "react";
import { getClientState } from 'Store/Selector'
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Styledbutton } from "../../Components/Inputs/button";
import { useHistory } from "react-router-dom";
import { Fragment } from "react"; 



function Client() {

  const history = useHistory();
  const {list, raw} = useSelector(getClientState);

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
