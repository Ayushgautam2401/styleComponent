import { Styledbutton } from 'Components/Inputs/button'
import React from 'react'
import { useHistory } from 'react-router-dom'

function InventoryForm() {
    const history = useHistory();

  return (
    <div>InventoryForm
        <Styledbutton onClick={() => history.push("/inventory")}>Back</Styledbutton>
    </div>
  )
}

export default InventoryForm