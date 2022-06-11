import MyDocument from './invoice_Pd';
import React, { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { invoiceActions } from 'Store/Action/invoiceAction';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoiceState } from 'Store/Selectors';

export const Pdf_Maker = () => {
  const { invoiceID } = useParams();
  const dispatch = useDispatch();
  const {invoice} = useSelector(getInvoiceState);

  useEffect(() => {
    if(invoiceID) {
      dispatch(invoiceActions.request({
        id: invoiceID
      }));
    }
    
  }, [invoiceID]);

  console.log(invoice)
  return (
    invoice ? <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <MyDocument invoice={invoice} />
    </PDFViewer> : <div>Loading...</div>
  )
};

