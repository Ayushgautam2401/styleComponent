import React from 'react';
import { getInvoiceState } from 'Store/Selector';
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Styledbutton } from 'Components/Inputs/button';
import { generatePath } from 'react-router-dom';


function Invoice() {
  const history = useHistory();
  const { list, raw } = useSelector(getInvoiceState);


  const handleInvoice = (invoice = {}) => {
    const { id } = invoice;
    history.push(`/invoice/Invoiceform/${id || ""}`);
  }
  const renderInvoiceItem = (invoiceID) => {
    const { id, invoiceDate, invoiceNumber } = raw[invoiceID] || {};
    return (
      <tr key={id} >
        <td>{id}</td>
        <td>{invoiceDate}</td>
        <td>{invoiceNumber}</td>

        <td><Styledbutton className='update' onClick={() => {
          handleInvoice(raw[invoiceID])
        }}>update</Styledbutton></td>
        <td> <Styledbutton className='generatepdf' variant="success" onClick={() => history.push(`/PDF/:invoiceID'${id}`)}>Generate PDF</Styledbutton></td>
      </tr>

    )
  }
  return (
    <>
      <Styledbutton className='add' onClick={() => { handleInvoice() }}>Add</Styledbutton>
      {
        <Table striped bordered hover variant="dark" >
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
    </>
  )
}

export default Invoice