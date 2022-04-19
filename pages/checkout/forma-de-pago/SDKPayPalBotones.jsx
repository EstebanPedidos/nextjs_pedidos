//next js
import { useRouter } from 'next/router'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//Servicios
import Services from '../../services/Services'

const initialOptions = {
    "client-id": "ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_",
    currency: "MXN",
    locale:"es_MX",
    components: "buttons",
    "disable-funding":"card"
};

export default function SDKPayPalBotones(){  
    const router    = useRouter()
    return (
        <>
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={() => { 
                    async function orden(){
                        let services    = await Services('POST-NOT','/registrov2/createOrderPayPal',{evento:3250091,isSTC:'S'})
                        let data        = await services.data
                        return data
                    }       
                    return orden()
                }}
                onApprove={() => { 
                    async function liberar(){        
                        let services    = await Services('POST','/registrov2/getOrderPayPal',{evento:3250091,orderID:props.data,address:'192.10.2.166',isSTC:'S',id_PayTok:'', term:'',interval_duration:''})
                        let data        = await services.data
                        if(data.estatus == "COMPLETED" || data.estatus == "completed"){
                            router.push('/checkout/confirmacion-de-pago')
                        }else{
                            alet('Error en transaccion')
                        }
                    }
                    liberar()
                }}
            />
        </PayPalScriptProvider>
        </>
    )
}

