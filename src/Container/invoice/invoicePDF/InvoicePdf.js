import React, { Fragment } from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20
  },
  fontSm: {
    fontSize: 10
  },
  fontmd: {
    fontSize: 14
  },
  textBold: {
    fontWeight: "bold"
  },
  fontUnderLine: {
    textDecoration: "underline"
  },
  flex: {
    display: "flex"
  },
  flexRow: {
    flexDirection: "row"
  },
  flexColumn: {
    flexDirection: "column"
  },
  flexJustifyBetween: {
    justifyContent: "space-between"
  },
  flexAlignCenter: {
    alignItems: "center"
  },
  textAlignCenter: {
    textAlign: "center"
  },
  width50: {
    width: "50%"
  },
  width33: {
    width: "33%"
  },
  width25: {
    width: "25%"
  },
  width15: {
    width: "15%"
  },
  borderBottom: {
    borderBottom: "1px solid black"
  },
  borderBox: {
    border: "1px solid black",
    borderBottom: "none"
  },
  borderRight: {
    borderRight: "1px solid black"
  },
  AccountContainer: {
    border: "1px solid black",
    borderRight: "none"
  },
  cellPadding: {
    padding: 8
  },
  marginBottom10: {
    marginBottom: 10
  },
  marginBottom30: {
    marginBottom: 30
  }
});

 export const MyDocument = ({invoice}) => {
  const { invoiceDate, invoiceNumber, firmDetail, invoicedRaisedBy, totalAmount, currencyType } = invoice;

  const renderTableDetail = (values, width, cellStyles, isCenterAlign) => {
    return (
      <View style={[styles.flex, styles.flexRow, styles.borderBottom, isCenterAlign ?  styles.textAlignCenter : undefined,]}>
        {
          values.map((value, index) => (
            <Text key={index} style={[styles.cellPadding, {width: `${width[index] || 50}%`}, index !== values.length -1 ? styles.borderRight : undefined, styles.fontSm, ...(cellStyles[index] || [])]}>{value}</Text>
          ))
        }
      </View>
    )
  }

  const renderFirmDetail=()=>{
    const {firmDetail:{name,addressLine1, addressLine2, telephone,account:{panCard}}}= invoice;
  return( <View style={[styles.flex, styles.flexRow, styles.flexJustifyBetween, styles.marginBottom10]}>
    <View style={[styles.width50]}>
      <Image  style={{ width: "30%" }} src={"/photo/Biz-Tecno_logo.png"}/>
    </View>
    <View style={[styles.width50]}>
      <Text style={styles.fontmd}>{name}</Text>
      <Text style={styles.fontSm}>{addressLine1}</Text>
      <Text style={styles.fontSm}>{addressLine2}</Text>
      <Text style={styles.fontSm}>PAN - {panCard}</Text>
      <Text style={styles.fontSm}>Telephone: {telephone}</Text>
    </View>
  </View>
  )
  }

  const renderAccountDetail = () => {
    const {purposeofInvoice, firmDetail:{account:{bankName,beneficiaryName, accountNumber, ifscCode, swiftCode, panCard, bankAddress}}} = invoice;
    return(
     
      <View style={[styles.borderBox, styles.marginBottom30]}>
      {renderTableDetail(["Name of the receiving Bank", bankName], [50, 50], [])}
      {renderTableDetail(["Beneficiary Name",beneficiaryName], [50, 50], [])}
      {renderTableDetail(["Beneficiary Current Account Number",accountNumber], [50, 50], [])}
      {renderTableDetail(["RTGS/NEFT IFSC Code", ifscCode], [50, 50], [])}
      {renderTableDetail(["PAN Card",panCard], [50, 50], [])}
      {renderTableDetail(["Swift Code",swiftCode], [50, 50], [])}
      {renderTableDetail(["Bank Address",bankAddress], [50, 50], [])}
      {renderTableDetail(["Purpose of remittance",purposeofInvoice], [50, 50], [])}
      </View>
    )
  }
  const renderDesciptions = () => {
    const {descriptions, totalAmountInWords} = invoice;

    return(
      <Fragment>
        <View style={[styles.borderBox, styles.marginBottom10]}>
      {renderTableDetail(["Details", "Type", `Total(${currencyType})`], [70, 10, 20], [])}
      {
        descriptions.map(({detail, type, amount}, index) =>(
          <Fragment key={`descriptions${index}`}>
            {renderTableDetail([detail,type,amount],[70,10,20], [])}
          </Fragment>
        ))
      }
      {renderTableDetail(["Total", "", totalAmount], [70, 10, 20], [])}
      </View>
      <Text style={[styles.fontmd , styles.marginBottom10]}>{`In Words: ${currencyType} ${totalAmountInWords} `}</Text>
      </Fragment>
    )
  }

  const renderAccountDetails=() => {
    const {AccountFirm: {name, addressLine1, addressLine2 }}= invoice;
    return(
      <View style={[styles.width50, styles.AccountContainer, styles.cellPadding]}>
            <Text style={styles.fontmd}>{name}</Text>
            <Text style={styles.fontSm}>{addressLine1}</Text>
            <Text style={styles.fontSm}>{addressLine2}</Text>

          </View>
    )
  }

  return (
    <Document>
      <Page size="A4" style={[styles.flex, styles.flexColumn, styles.page]}>
        <View style={[styles.flex, styles.flexAlignCenter, styles.marginBottom10]}>
          <Text style={styles.fontSm}>Invoice</Text>
          <Text style={styles.fontSm}>{invoiceDate}</Text>
        </View>
       {renderFirmDetail()}

        <View style={[styles.flex, styles.flexRow, styles.flexJustifyBetween, styles.marginBottom10]}>
          {renderAccountDetails()}

          <View style={[styles.width50, styles.borderBox]}>
            {renderTableDetail(["Summary"], [100], [], true)}
            {renderTableDetail(["Invoice Date", invoiceDate], [50, 50], [])}
            {renderTableDetail(["Invoice Number",invoiceNumber], [50, 50], [])}
            {renderTableDetail(["Current Invoice Amount", `${currencyType} ${totalAmount}`], [50, 50], [])}
          </View>

        </View>
        <Text style={[styles.textAlignCenter, styles.fontmd, styles.textBold, styles.fontUnderLine, styles.marginBottom10]}>Invoice Details</Text>
        {renderDesciptions()}
        {renderAccountDetail()}


        <Text style={[styles.fontmd]}>{`${invoicedRaisedBy} (${firmDetail.name})`}</Text>
      </Page>
    </Document>
  )
};

export default MyDocument;