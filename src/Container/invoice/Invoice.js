import React from 'react';
import { getInvoiceState } from 'Store/Selector';
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Styledbutton } from 'Components/Inputs/button';
import { Fragment } from 'react';
import queryString from 'query-string'

import { makeid } from 'Util/idGenrator';
function Invoice() {
  //  let queries = queryString.parse('clone=true',{parseBooleans: true});
  // console.log(queries)
  const history = useHistory();
  const { list, raw } = useSelector(getInvoiceState);
  const handleInvoice = (invoice = {}) => {
    const { id } = invoice;
    history.push(`/invoice/Invoiceform/${id || ""}`);
  }
  const handleClone =(invoice = {}) => {
    const { id } = invoice;
    history.push(`/invoice/Invoiceform/${id || ""}?clone=true`);
  }

  const renderInvoiceItem = (invoiceID) => {
    const { id, invoiceDate, invoiceNumber } = raw[invoiceID]
        return (
      <tr key={id} >
        <td>{id}</td>
        <td>{invoiceDate}</td>
        <td>{invoiceNumber}</td>
        <td><Styledbutton className='update' onClick={() => {
          handleInvoice(raw[invoiceID])
        }}>update</Styledbutton></td>
        {/* <td><Styledbutton onClick={() => {handleInvoiceClone(raw[invoiceID])}}>Clone</Styledbutton></td> */}
       
        <td> <Styledbutton variant="success" onClick={() => {
          history.push(`/invoice_Pd/${id}`)
        }}>Generate PDF</Styledbutton></td>
        <td>
          <Styledbutton variant="success" onClick={()=>{ 
            handleClone(raw[invoiceID])
          }} >clone</Styledbutton>
        </td>
      </tr>
      

    )
  }
  return (
    <Fragment>

      <Styledbutton onClick={() => { handleInvoice() }}>Add</Styledbutton>
      {
        <Table striped bordered hover >
          <tbody>
            <tr>
              <td>Invoice Id</td>
              <td>Invoice Date</td>
              <td>Invoice Number</td>
            </tr>
            {
              list?.map(renderInvoiceItem)
            }
          </tbody>
        </Table>
      }
    </Fragment>
  )
}

export default Invoice