import React from 'react';
import { getInvoiceState } from 'Store/Selector';
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Styledbutton } from 'Components/Inputs/button';
import { generatePath } from 'react-router-dom';


function Invoice() {
   const history = useHistory();
  const { list, raw } = useSelector(getInvoiceState);


  const handleInvoice = (invoice = {}) => {
     const { id } = invoice;
     history.push(`/Invoice/${id || ""}`);
   }
  const renderInvoiceItem = (invoiceID)=>{
    const { id,invoiceDate,invoiceNumber, name, order} = raw[invoiceID] || {};
    return (
      <tr key={id} >
        <td>{id}</td>
        <td>{invoiceDate}</td>
        <td>{invoiceNumber}</td>
        
          <td><button  className='update' onClick={() => {
          handleInvoice(raw[invoiceID])
        }}>update</button></td>  
        <td> <Button className='generatepdf' variant="success" onClick={()=> history.push(`/PDF/${id}`)}>Generate PDF</Button></td> 
      </tr>
       
    )
  }
  return (
    <div className='invoice'>
      <Styledbutton className='add' onClick={() => { handleInvoice() }}>Add</Styledbutton> 
     

      <div className='invoicelist'></div>
      {
        <Table striped bordered hover variant="dark" >
              <thead>
            <tr>
              <th>Id</th>
              <th>Invoice Date</th>
              <th>Invoice Number</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
            <tr>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>

            </tr> 
            </thead>    

             {
              list?.map(renderInvoiceItem)
            } 
        </Table>
      }
    </div>
  )
}

export default Invoice