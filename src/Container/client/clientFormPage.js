import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { clientActions, clientUpdateActions } from 'Store/Action/clientActions'
import { getClientState } from 'Store/Selectors'
import { Button } from 'react-bootstrap'
import ClientForm from "./ClientForm";

const ClientFormPage = props => {
  const back = useNavigate();
  const {id} = useParams();
  const dispatch= useDispatch();
  const {client, loading} = useSelector(getClientState);

  useEffect(() => {
    if(id) {
      dispatch(clientActions.request({id}));
    }
  }, []);

  const handleFormSubmit= (data)=>{
    console.log(data);
    dispatch(clientUpdateActions.request(data));
  }

  
  return (
    <div className='formdesign'>
        <Button variant="outline-dark" onClick={() => back("/clientList")}>Back</Button>
        <ClientForm handleFormSubmit={handleFormSubmit} initialValues={id ? client : {address:""}}/>
    </div>
  )
}

export default ClientFormPage;
