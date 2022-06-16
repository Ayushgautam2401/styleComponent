import { Styledbutton } from 'Components/Inputs/button'
import FormInput from 'Components/Inputs/formInputs'
import { Styledheader } from 'Components/Inputs/header'
import { renderInvoiceOrders } from 'Components/Inputs/fieldarray'
import { RenderSelectInput } from 'Components/selectComponent/selectComponent'
import React from 'react';
import { Field, Form, reduxForm, FieldArray } from 'redux-form'
import { FormContainer, FormHeaderContainer } from './invoicePDF/FormStyling'
import { required } from 'Util/validate';
import { Fragment } from 'react'
const current = new Date();


const invoiceForm = (props) => {
  console.log("aajaa",props)
  const { id } = useParams();
  const dispatch = useDispatch();
  const { invoice, loading } = useSelector(getInvoiceState);
  const {list, raw }= useSelector(getClientState);
  
  
  const [clientOptions, setClientOptions] = useState([]);



  useEffect(() => {
    if (id) {
      dispatch(invoiceActions.request({ id }));
    }
  }, [id]);

  useEffect(() => {
    if(!list) {
      // api call dipatch
      console.log("call api")
      dispatch(clientListActions.request());
    } else {
      // generate options
      console.log("generate options");
      const options= [];
      list.forEach(item => {
        const clientDetail = raw[item]
        options.push({label: clientDetail.name, value: clientDetail.id})
      })
      setClientOptions(options);
    }
  }, [list]);

  
  const handleFormSubmit = (formData) => {
    let total = 0;
    formData.descriptions.forEach(({ amount }) => {
      total += parseInt(amount);
    })

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
          bankAddress: "S.C.O. No.485-486, Sector 35-C, Chandigarh – 160022"
        }
      },
      totalAmount: total,
      totalAmountInWords: doConvert(total),
    }
    dispatch(invoiceUpdateActions.request(formData));
  }
   

  return (

    <Fragment>
      <FormContainer>
       
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormHeaderContainer>
          <Field
            name="invoiceDate"
            component={FormInput}
            type="text"
            placeholder="invoiceDate"
            label="Date"
          />
          <Field
            name="purposeofInvoice"
            type="text"
            placeholder='Purpose of Invoice'
            component={FormInput}
            validate={[required]}
            label="Purpose of Invoice"
          />
          </FormHeaderContainer>
          <FormHeaderContainer>
          <Field
            name="invoiceNumber"
            type="text"
            placeholder='Invoice Number'
            label="Invoice Number"
            component={FormInput} 
            validate={[required]}
            />

            <Field
            name="currencyType"
            type="text"
            placeholder='Currency type'
            component={FormInput}
            validate={[required]}
            label="Currency Type"
          /> </FormHeaderContainer>
          <Field
            name="clientFirm"
            component={RenderSelectInput}
            options= {clientOptions}
          />
          <FieldArray name="descriptions" component={renderInvoiceOrders} />
          <Styledbutton onClick={handleFormSubmit}>Submit</Styledbutton>
        </Form>
      </FormContainer>
      </Fragment>
  );
}

export default reduxForm({
  form: "invoiceForm",
  enableReinitialize: true,
})(invoiceForm);
