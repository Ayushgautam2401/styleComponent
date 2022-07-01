import { Styledbutton } from 'Components/Inputs/button'
import React, {Fragment } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getInventoryState } from 'Store/Selector';

function Inventory() {
    const history = useHistory();
    const {list , raw}= useSelector(getInventoryState);

    const handleInventory = (inventory = {}) => {
      const {category} = inventory;
      history.push(`/inventory/Inventoryform/`)
    }

    const renderInventoryItem = (category) => {
      const {index} = {}

      return (
    <tbody key={index} >
      <tr key={index}>
        {/* <td>{{index}+1}</td> */}
        <td key={index}>{category}</td>   
      
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
        {/* <th>S.No.</th> */}
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