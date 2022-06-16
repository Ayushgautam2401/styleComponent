import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  invoiceActions,
  invoiceUpdateActions,
} from "Store/Action/invoiceActions";
//import { getInvoiceState,getClientState } from 'Store/Selector/index'
//import './invoiceForm.scss'
import { getInvoiceState, getClientState } from "Store/Selector";
import InvoiceForm from "./invoiceForm";
//import { Button } from 'react-bootstrap';
import { clientListActions } from "Store/Action/clientActions";
import { Styledbutton } from "Components/Inputs/button";
import { Fragment } from 'react'
import { Button } from 'react-bootstrap'

// const [startDate, setStartDate] = useState(new Date());
const current = new Date();
const currentDate = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

function doConvert(numberInput) {
  let oneToTwenty = [
    "",
    "ONE ",
    "TWO ",
    "THREE ",
    "FOUR ",
    "FIVE ",
    "SIX ",
    "SEVEN ",
    "EIGHT ",
    "NINE ",
    "TEN ",
    "ELEVEN ",
    "TWELVE ",
    "THIRTEEN ",
    "FOURTEEN ",
    "FIFTEEN ",
    "SIXTEEN ",
    "SEVENTEEN ",
    "EIGHTEEN ",
    "NINETEEN ",
  ];
  let tenth = [
    "",
    "",
    "TWENTY",
    "THIRTY",
    "FOURTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY",
  ];

  if (numberInput.toString().length > 7) console.log(numberInput);
  let num = ("0000000" + numberInput)
    .slice(-7)
    .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  console.log(num);
  if (!num) return;

  let outputText =
    num[1] != 0
      ? (oneToTwenty[Number(num[1])] ||
          `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " MILLION "
      : "";

  outputText +=
    num[2] != 0
      ? (oneToTwenty[Number(num[2])] ||
          `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "HUNDRED "
      : "";
  outputText +=
    num[3] != 0
      ? (oneToTwenty[Number(num[3])] ||
          `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + " THOUSAND "
      : "";
  outputText +=
    num[4] != 0
      ? (oneToTwenty[Number(num[4])] ||
          `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "HUNDRED "
      : "";
  outputText +=
    num[5] != 0
      ? oneToTwenty[Number(num[5])] ||
        `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
      : "";

  return outputText;
}

// const Add =new Address();
const InvoiceFormPage = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { invoice, loading } = useSelector(getInvoiceState);
  const { list, raw } = useSelector(getClientState);
  const [clientOptions, setClientOptions] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(invoiceActions.request({ id }));
    }
  }, [id]);

  useEffect(() => {
    if (!list) {
      // api call dipatch
      console.log("call api");
      dispatch(clientListActions.request());
    } else {
      // generate options
      console.log("generate options");
      const options = [];
      list.forEach((item) => {
        const clientDetail = raw[item];
        options.push({ label: clientDetail.name, value: clientDetail.id });
      });
      setClientOptions(options);
    }
  }, [list]);

  const handleFormSubmit = (formData) => {
    let total = 0;
    formData.descriptions.forEach(({ amount }) => {
      total += parseInt(amount);
    });

    const clientDetail = raw[formData.clientFirm.value];
    formData = {
      ...formData,
      clientFirm: clientDetail,
      invoicedRaisedBy: "Ashutosh Sharma",
      firmDetail: {
        name: "Biz Tecno",
        addressLine1: "Plot J7, FCS Building, Rajiv Gandhi Technology Park",
        addressLine2: "Chandigarh – 160101",
        telephone: "+91 9781918447",
        account: {
          bankName: "ICICI BANK LTD.",
          beneficiaryName: "Biz Tecno",
          accountNumber: "632205009436",
          ifscCode: "ICIC0006322",
          swiftCode: "ICICINBBCTS",
          panCard: "BYOPS0301M",
          bankAddress: "S.C.O. No.485-486, Sector 35-C, Chandigarh – 160022",
        },
      },
      totalAmount: total,
      totalAmountInWords: doConvert(total),
    };
    dispatch(invoiceUpdateActions.request(formData));
  };
  return (
    <Fragment>
      <Button variant='outline-dark' onClick={() => history.push("/invoice")}>Back</Button>
      <InvoiceForm clientOptions={clientOptions} handleFormSubmit={handleFormSubmit} initialValues={id ? {...invoice, clientFirm: {label: invoice.clientFirm && invoice.clientFirm.name, value: invoice.clientFirm && invoice.clientFirm.id}} : { invoiceDate: currentDate }} />
    </Fragment>
  )
}
export default InvoiceFormPage;
