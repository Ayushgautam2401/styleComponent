import { Styledbutton } from 'Components/Inputs/button'
import React from 'react'
import { useSelector } from 'react-redux';
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { getInventoryState } from 'Store/Selector';

function Inventory() {
    const history = useHistory();
    const {list, raw} = useSelector(getInventoryState);




  return (
      <Fragment>
    <Styledbutton onClick={() => history.push("/inventory/Inventoryform")}>Add</Styledbutton>
    </Fragment>
  )
}

export default Inventory;