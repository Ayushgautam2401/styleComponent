import { Styledbutton } from 'Components/Inputs/button'
import React from 'react'
import { Fragment } from 'react'
import InventoryForm from './InventoryForm'

const InventoryFormPage = (props) => {

    const  handleFormSubmit= (data)=>{
      console.log(data);
      dispatch();
      history.push("/inventory")
    }
  return (
    <Fragment>
      <Styledbutton onClick={()=> history.push("/inventory")}>Back</Styledbutton>
        <InventoryForm handleFormSubmit={handleFormSubmit}/>
    </Fragment>
  )
}

export default InventoryFormPage