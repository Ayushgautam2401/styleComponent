import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Styledbutton } from 'Components/Inputs/button'
import { InventoryActions, InventoryUpdateActions } from 'Store/Action/inventoryActions'
import { getInventoryState } from 'Store/Selector'
import InventoryForm from './InventoryForm'

const InventoryFormPage = (props) => {
  const history= useHistory();
  const {id} = useParams();
  const dispatch = useDispatch();

const {inventory,loading} = useSelector(getInventoryState);

  useEffect(()=>{
    if(id){
      dispatch(InventoryActions.request({id}));
    }
  }, [])

 const  handleFormSubmit= (data)=>{
      console.log(data);
      dispatch(InventoryUpdateActions.request(data));
      history.push("/inventory")
    }
  return (
    <Fragment>
      <Styledbutton onClick={()=> history.push("/inventory")}>Back</Styledbutton>
        <InventoryForm handleFormSubmit={handleFormSubmit}  initialValues={id ? inventory : {}}/>
    </Fragment>
  )
}

export default InventoryFormPage