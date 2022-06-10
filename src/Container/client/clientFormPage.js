<<<<<<< HEAD
=======
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { clientActions, clientUpdateActions } from 'Store/Action/clientActions'
import { getClientState } from 'Store/Selector'
import { Button } from 'react-bootstrap'
import ClientForm from "./clientForm";

const ClientFormPage = (props) => {
  const history = useHistory();
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
        <Button variant="outline-dark" onClick={() => history.push("/clientList")}>Back</Button>
        <ClientForm handleFormSubmit={handleFormSubmit} initialValues={id ? client : {}}/>
    </div>
  )
}

export default ClientFormPage;
>>>>>>> master
