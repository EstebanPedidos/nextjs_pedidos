import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//Servicios
import Services from '../../services/Services'

export default function SDKPayPalBotones(props){
    const initialOptions = {
        "client-id": "ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_",
        currency: "MXN",
        locale:"es_MX",
        components: "buttons",
        "disable-funding":"card"
    };

    async function Liberar(){        
        let services    = await Services('POST','/registrov2/getOrderPayPal',{evento:3250091,orderID:props.data,address:'192.10.2.166',isSTC:'S',id_PayTok:'', term:'',interval_duration:''})
        let data        = await services.data
        console.log(data)
    }

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={(data, actions) => {        
                    return props.data
                }}
                onApprove={(data, actions) => { 
                    Liberar()
                }}
            />
        </PayPalScriptProvider>
    )
}

export async function getServerSideProps(context) {
    let services    = await Services('POST','/registrov2/createOrderPayPal',{evento:3250091,isSTC:'S'})
    let data        = await services.data
    console.log(data)
    return {
      props: {
          data : data
      },
    }
}