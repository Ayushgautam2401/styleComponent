export function getTitle(state) {
    return state.TitleReducer
}

export function getData(state) {
    return state.tableData;
}


export function getClientState(state) {
    return state.clientReducer
}

export function getInvoiceState(state) {
    return state.invoiceReducer
}