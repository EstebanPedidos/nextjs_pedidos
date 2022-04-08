import {
    PayPalScriptProvider,
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    usePayPalHostedFields,
} from "@paypal/react-paypal-js";
//Servicios
import Services from '../../services/Services'

const SubmitPayment = () => {
    // Here declare the variable containing the hostedField instance
    const hostedFields = usePayPalHostedFields();

    const submitHandler = () => {
        alert('Entro a funcion')
        if (!typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
        alert('Paso a funcion')
        hostedFields
            .submit({
                // The full name as shown in the card and billing address
                cardholderName: "John Wick",
            })
            .then((order) => {
                fetch(
                    "/your-server-side-integration-endpoint/capture-payment-info"
                )
                    .then((response) => response.json())
                    .then((data) => {
                        // Inside the data you can find all the information related to the payment
                    })
                    .catch((err) => {
                        // Handle any error
                    });
            });
    };

    return <button onClick={submitHandler}>Pay</button>;
};

export default function Hostedfields(props) {
    const initialOptions = {
        "client-id": "ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_",
        "data-client-token": props.data.clienteToken,
        currency: "MXN",
        locale:"es_MX",
        components: "hosted-fields,buttons",
        "data-service-stage":"paypal.com",
        "data-stag":"paypal.com",
        "data-api-stage-host":"api.paypal.com"
    };

    return (
        <PayPalScriptProvider
            options={initialOptions}
        >
            <PayPalHostedFieldsProvider
                createOrder={() => {
                    let id = async ()=>{
                        let services    = await Services('POST','/registrov2/createOrderPayPal',{evento:3250091,isSTC:'S'})
                        let data        = await services.data
                        return data
                    }
                    
                    console.log(id)
                    console.log(data)
                    return data
                }}
            >
                <PayPalHostedField
                    id="card-number"
                    hostedFieldType="number"
                    options={{ selector: "#card-number" }}
                />
                <PayPalHostedField
                    id="cvv"
                    hostedFieldType="cvv"
                    options={{ selector: "#cvv" }}
                />
                <PayPalHostedField
                    id="expiration-date"
                    hostedFieldType="expirationDate"
                    options={{
                        selector: "#expiration-date",
                        placeholder: "MM/YY",
                    }}
                />
                <SubmitPayment />
            </PayPalHostedFieldsProvider>
        </PayPalScriptProvider>
    );
}

export async function getServerSideProps(context) {
    let services    = await Services('POST','/registrov2/clientetoken?cust_num='+839494,{})
    let data        = await services.data
    console.log(data)
    return {
      props: {
          data : data
      },
    }
}