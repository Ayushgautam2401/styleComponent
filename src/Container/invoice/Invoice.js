import React from 'react'
import { useNavigate } from "react-router-dom";
import { getInvoiceState } from 'Store/Selector'
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function Invoice() {
//   const navigate = useNavigate();
  const { list, raw } = useSelector(getInvoiceState);


//   const handleInvoice = (invoice = {}) => {
//     const { id } = invoice;
//     navigate(`/invoice/${id || ""}`);
//   }
  const renderInvoiceItem = (invoiceID)=>{
    const { id,invoiceDate,invoiceNumber, name, order} = raw[invoiceID] || {};
    return (
      <tr key={id} >
        <td>{id}</td>
        <td>{invoiceDate}</td>
        <td>{invoiceNumber}</td>
        
         {/* <td><button  className='update' onClick={() => {
          handleInvoice(raw[invoiceID])
        }}>update</button></td>  */}
        {/* <td> <Button className='generatepdf' variant="success" onClick={()=> navigate(`/PDF/${id}`)}>Generate PDF</Button></td> */}
      </tr>
       
    )
  }
  return (
    <div className='invoice'>
      {/* <button className='add' onClick={() => { handleInvoice() }}>Add</button>  */}
    

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
            {/* <tr>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>
                <td>ejs</td>

            </tr> */}
            </thead>    

            {/* {
              list?.map(renderInvoiceItem)
            } */}
        </Table>
      }
    </div>
  )
}

export default Invoice