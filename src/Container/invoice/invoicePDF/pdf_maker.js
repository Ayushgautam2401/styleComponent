import React, { useEffect } from 'react';
import { PDFViewer  } from '@react-pdf/renderer';
import { MyDocument } from './InvoicePdf';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoiceState } from 'Store/Selector';
import { invoiceActions } from 'Store/Action/invoiceActions';



const Makerpdf = () => {
  const { invoiceID } = useParams();
  const dispatch = useDispatch();
  const {invoice} = useSelector(getInvoiceState);

  useEffect(()=>{
    if(invoiceID){
      dispatch(invoiceActions.request({
        id: invoiceID
      }));
    }
  }, [invoiceID]);

  console.log(invoice)
  return(

   invoice ? <PDFViewer style={{width:"100%",height:"100vh"}}>
    <MyDocument invoice={invoice}/>
  </PDFViewer>: <div>...Loading...</div>
  )
};

export default Makerpdf;