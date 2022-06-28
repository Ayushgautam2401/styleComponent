import { Styledbutton } from 'Components/Inputs/button'
import React from 'react'
import { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getInventoryState } from 'Store/Selector';

function Inventory() {
    const history = useHistory();
    const {list , raw}= useSelector(getInventoryState);

<<<<<<< HEAD
    const handleInventory = (Inventory = {}) => {
      const {id} = Inventory;
      history.push(`/Inventory/Inventoryform`)
=======
    const handleInventory = (inventory = {}) => {
      const {id} = inventory;
      history.push(`/inventory/Inventoryform/${id || ""}`)
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
    }

    const renderInventoryItem = ( InventoryID,index) => {
      const {id,name,quantity} = raw[InventoryID] || {}

      return (
    <tbody key={id}>
      <tr key={id}>
        <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      </tr>
    </tbody>
      )
    }

     
    


  return (
      <Fragment>
    <Styledbutton onClick={()=> {
      handleInventory();
    }}>Add</Styledbutton>


{
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
      </tr>

    </thead>
    {list?.map(renderInventoryItem)}

  </Table>
}

    </Fragment>
  )
}

export default Inventory;