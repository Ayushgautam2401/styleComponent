import { forEach, map } from "lodash";
import {
    INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS, INVOICE_LIST_FAILURE,
    INVOICE_REQUEST, INVOICE_FAILURE, INVOICE_SUCCESS,
    INVOICE_UPDATE_REQUEST, INVOICE_UPDATE_FAILURE, INVOICE_UPDATE_SUCCESS
} from 'Store/Action/invoiceActions'
import { makeid } from "Util/idGenrator";

const INITIAL_STATE = {
    list: undefined,
    raw: {
        // "12": {
        //     id: "12",
        //     invoiceRaisedBy: "Ashutosh Sharma",
        //     purposeOfInvoice: "Software Consulting",
        //     invoiceDate: "3 april 2006",
        //     invoiceNumber: "IN-062",
        //     firmDetail: {
        //       name: "Biz Tecno",
        //       addressLine1: "Plot J7, FCS Building, Rajiv Gandhi Technology Park",
        //       addressLine2: "Chandigarh – 160101",
        //       telephone: "+91 9781918447",
        //       account: {
        //         bankName: "ICICI BANK LTD.",
        //         beneficiaryName: "Biz Tecno",
        //         accountNumber: "632205009436",
        //         ifscCode: "ICIC0006322",
        //         swiftCode: "ICICINBBCTS",
        //         panCard: "BYOPS0301M",
        //         bankAddress: "S.C.O. No.485-486, Sector 35-C, Chandigarh – 160022"
        //       }
        //     },
        //     clientFirm: {
        //       name: "SGH Holdings LLC",
        //       addressLine1: "PO Box, 650429, Sterling VA 20165, USA",
        //       addressLine2: ""
        //     },
        //     descriptions: [
        //       {
        //         detail: "PIM – For April 2022 – Resource 1 - Rajpal ",
        //         type: "Fixed",
        //         amount: "1700"
        //       },
        //       {
        //         detail: "PIM – For April 2022 – Resource 1 - Rajpal ",
        //         type: "Fixed",
        //         amount: "1700"
        //       },
        //       {
        //         detail: "PIM – For April 2022 – Resource 1 - Rajpal ",
        //         type: "Fixed",
        //         amount: "1600"
        //       }
        //     ],
        //     totalAmount: "5000",
        //     totalAmountInWords:"Five Thousand Only",
        //     currencyType: "USD"
        //   },
        //   "13": {
        //     id: "13",
        //     invoiceRaisedBy: "Ashutosh Sharma",
        //     purposeOfInvoice: "Software Consulting",
        //     invoiceDate: "3 april 2006",
        //     invoiceNumber: "IN-062",
        //     firmDetail: {
        //       name: "Biz Tecno",
        //       addressLine1: "Plot J7, FCS Building, Rajiv Gandhi Technology Park",
        //       addressLine2: "Chandigarh – 160101",
        //       telephone: "+91 9781918447",
        //       account: {
        //         bankName: "ICICI BANK LTD.",
        //         beneficiaryName: "Biz Tecno",
        //         accountNumber: "632205009436",
        //         ifscCode: "ICIC0006322",
        //         swiftCode: "ICICINBBCTS",
        //         panCard: "BYOPS0301M",
        //         bankAddress: "S.C.O. No.485-486, Sector 35-C, Chandigarh – 160022"
        //       }
        //     },
        //     clientFirm: {
        //       name: "SGH Holdings LLC",
        //       addressLine1: "PO Box, 650429, Sterling VA 20165, USA",
        //       addressLine2: ""
        //     },
        //     descriptions: [
        //       {
        //         detail: "PIM – For April 2022 – Resource 1 - Rajpal ",
        //         type: "Fixed",
        //         amount: "1700"
        //       },
        //       {
        //         detail: "PIM – For April 2022 – Resource 1 - Rajpal ",
        //         type: "Fixed",
        //         amount: "1700"
        //       },
        //       {
        //         detail: "PIM – For April 2022 – Resource 1 - Rajpal ",
        //         type: "Fixed",
        //         amount: "1600"
        //       }
        //     ],
        //     totalAmount: "6000",
        //     totalAmountInWords:"Six Thousand Only",
        //     currencyType: "AUD"
        //   }
    },
    invoice: undefined,
    loading: false,
    error: undefined
}

const invoiceReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    const { data, message } = payload || {};
    switch (type) {
        case INVOICE_LIST_REQUEST:
            return { ...state, loading: true };
        case INVOICE_LIST_SUCCESS:
            const raw = {};
            forEach(data, (item) => {
                raw[data.id] = item
            })
            return { ...state, loading: false, list: map(data, "id"), raw };
        case INVOICE_LIST_FAILURE:
            return {...state, error: message, loading: false};
        case INVOICE_REQUEST:
            return { ...state, invoice: undefined, loading: true, error: undefined };
        case INVOICE_SUCCESS:
            return { ...state, invoice: data, loading: false };
        case INVOICE_FAILURE:
        case INVOICE_UPDATE_FAILURE:
            return { ...state, error: message, loading: false };
        case INVOICE_UPDATE_REQUEST:
            return { ...state, loading: true, error: undefined }
        case INVOICE_UPDATE_SUCCESS:
            if(!data.id) {
                 const id = makeid(2);
                 if(!state.list) {
                    state.list= [];
                 }
                state.list.push(id);
                state.raw[id] = {...data, id};
              } else {
                state.raw[data.id] = data;
              }
              return { ...state, loading: false, error: undefined }
              default: return state;
    }
}
export default invoiceReducer;