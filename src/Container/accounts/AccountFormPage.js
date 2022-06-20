import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { AccountActions, AccountUpdateActions } from 'Store/action/AccountActions'
import { getAccountState } from 'Store/selector'
import { Button } from 'react-bootstrap'
import AccountForm from "./AccountForm";


const AccountFormPage = (props) => {
  const history = useHistory();
  const {id} = useParams();
  const dispatch= useDispatch();

  const {Account, loading} = useSelector(getAccountState);

  useEffect(() => {
    if(id) {
      dispatch(AccountActions.request({id}));
    }
  }, []);

  const handleFormSubmit= (data)=>{
    console.log(data);
    dispatch(AccountUpdateActions.request(data));

  }

  return (
    <div className='formdesign'>
        <Button variant="outline-dark" onClick={() => history.push("/Account")}>Back</Button>
        <AccountForm handleFormSubmit={handleFormSubmit} initialValues={id ? Account : {}}/>
    </div>
  )
}

export default AccountFormPage;

