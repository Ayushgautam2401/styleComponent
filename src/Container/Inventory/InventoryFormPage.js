import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Styledbutton } from 'Components/Inputs/button'
import { InventoryActions, InventoryUpdateActions } from 'Store/Action/inventoryActions'
import { getInventoryState } from 'Store/Selector'
import InventoryForm from './InventoryForm'
import NextPage from './NextPage'

const InventoryFormPage = (props) => {
  const history= useHistory();
  const {id} = useParams();
  const dispatch = useDispatch();
  const {category} = useParams();
const {data, raw} = useSelector(getInventoryState);

  useEffect(()=>{
    if(id){
      dispatch(InventoryActions.request({id}));
    }
  }, [])

 const  handleFormSubmit= (data)=>{
      console.log(data);
      dispatch(InventoryUpdateActions.request(data));
     // const {category} = data;
      //history.push("/inventory/Inventoryform/NextPage");
      history.push("/inventory")
    }
  return (
    <Fragment>
      <Styledbutton onClick={()=> history.push("/inventory")}>Back</Styledbutton>
        <InventoryForm handleFormSubmit={handleFormSubmit} />
        {/* <NextPage/> */}
        <NextPage handleFormSubmit={handleFormSubmit}  initialValues={id ? inventory : {}}/>
    </Fragment>
  )
}

export default InventoryFormPage