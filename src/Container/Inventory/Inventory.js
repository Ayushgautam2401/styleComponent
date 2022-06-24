import { Styledbutton } from 'Components/Inputs/button'
import React from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

function Inventory() {
    const history = useHistory()
    


  return (
      <Fragment>
    <Styledbutton onClick={() => history.push("/inventory/Inventoryform")}>Add</Styledbutton>
    </Fragment>
  )
}

export default Inventory