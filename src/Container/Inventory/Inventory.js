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

    const handleInventory = (inventory = {}) => {
      const {id} = inventory;
      history.push(`/inventory/Inventoryform/`)
    }

    const renderInventoryItem = ( InventoryID,index) => {
      const {id,category} = raw[InventoryID] || {}

      return (
    <tbody key={id} >
      <tr key={id}>
        <td>{id}</td>
        <td>{category}</td>   
      
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
        <th>Category</th>
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