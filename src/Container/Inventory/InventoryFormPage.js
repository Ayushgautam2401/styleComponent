import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Styledbutton } from 'Components/Inputs/button'
import { InventoryActions, InventoryUpdateActions } from 'Store/Action/inventoryActions'
import { getInventoryState } from 'Store/Selector'
import InventoryForm from './InventoryForm'

<<<<<<< HEAD
const InventoryFormPage = () => {
=======
const InventoryFormPage = (props) => {
  const history= useHistory();
  const {id} = useParams();
  const dispatch = useDispatch();
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408

const {inventory,loading} = useSelector(getInventoryState);

  useEffect(()=>{
    if(id){
      dispatch(InventoryActions.request({id}));
    }
  }, [])

 const  handleFormSubmit= (data)=>{
      console.log(data);
<<<<<<< HEAD
      dispatch();
=======
      dispatch(InventoryUpdateActions.request(data));
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
      history.push("/inventory")
    }
  return (
    <Fragment>
      <Styledbutton onClick={()=> history.push("/inventory")}>Back</Styledbutton>
<<<<<<< HEAD
        <InventoryForm handleFormSubmit={handleFormSubmit}/>
=======
        <InventoryForm handleFormSubmit={handleFormSubmit}  initialValues={id ? inventory : {}}/>
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
    </Fragment>
  )
}

export default InventoryFormPage