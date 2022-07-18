import {useState} from 'react'
//next js
import { useRouter } from 'next/router'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//Servicios
import Services from '../../services/Services'
import Alertas from "../Alertas";

const initialOptions = {
    "client-id": "ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_",
    currency: "MXN",
    locale:"es_MX",
    components: "buttons",
    "disable-funding":"card"
};

export default function SDKPayPalBotones({evento}){  
    const router    = useRouter()
    const [orderId,setOrderId]= useState('')
    const [alerta,setAlerta]    	     = useState({})

    return (
        <>
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={() => { 
                    async function orden(){
                        let services    = await Services('POST-NOT','/registrov2/createOrderPayPal',{evento:evento,isSTC:'S'})
                        let data        = await services.data
                        setOrderId(data)
                        return data
                    }       
                    return orden()
                }}
                onApprove={(orderId) => { 
                    async function liberar(){       
                        if(orderId !== '' && orderId !== 'null' && orderId.orderID !== null){
                            let services    = await Services('POST','/registrov2/getOrderPayPal',{evento:evento,orderID:orderId.orderID,address:'192.10.2.166',isSTC:'S',id_PayTok:'', term:'',interval_duration:''})
                            let data        = await services.data
                            if(data.estatus == "COMPLETED" || data.estatus == "completed"){
                                router.push('/checkout/confirmacion-de-pago')
                            }else{
                                setAlerta({severity:'error',mensaje:'Error al obtener la Orden',vertical:'bottom',horizontal:'right'})
                            }
                        }
                    }
                    liberar()
                }}
            />
            {(alerta.hasOwnProperty('severity'))&&
				<Alertas setAlerta={setAlerta} alerta={alerta}/>
			}
        </PayPalScriptProvider>
        </>
    )
}
