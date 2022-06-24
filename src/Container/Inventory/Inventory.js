import { Styledbutton } from 'Components/Inputs/button'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Inventory() {
    const history = useHistory();
    


  return (
      <div>Inventory
    <Styledbutton onClick={() => history.push("/inventory/Inventoryform")}>Add Category</Styledbutton>
    </div>
  )
}

export default Inventory;