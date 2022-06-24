export function getTitle(state) {
    return state.TitleReducer
}

export function getData(state) {
    return state.tableData;
}

export function getAccountState(state) {
    return state.AccountReducer
}

export function getInvoiceState(state) {
    return state.invoiceReducer
}
export function getToken(state){
    return state.authReducer.token
}
export function getAuthState(state){
    return state.authReducer
}
export function getUserState(state){
    return state.UserReducer
}