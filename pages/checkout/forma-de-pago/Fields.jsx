import { useState, useRef } from "react";
//next js
import { useRouter } from 'next/router'
//Material
import {Checkbox ,FormControlLabel,FormControl} from '@mui/material';
//PAYPAL
import {
	PayPalScriptProvider,
	PayPalHostedFieldsProvider,
	PayPalHostedField,
	usePayPalHostedFields,
} from "@paypal/react-paypal-js";
//SERVICIOS
import Services from '../../services/Services'
//Componentes
import Alertas from "../Alertas";

const CUSTOM_FIELD_STYLE = {"border":"1px solid #606060","boxShadow":"2px 2px 10px 2px rgba(0,0,0,0.1)"};
const INVALID_COLOR = {
	color: "#dc3545",
};

// Example of custom component to handle form submit
const SubmitPayment = ({ customStyle,evento}) => {
	const [paying, setPaying] 	= useState(false);
	const cardHolderName 		= useRef(null);
	const hostedField 			= usePayPalHostedFields();
	const router    			= useRouter()
	const [alerta,setAlerta]   	= useState({})
	const [checked,setChecked]  = useState(false)

	const handleClick = () => {
		if (hostedField) {
			if (
				Object.values(hostedField.cardFields.getState().fields).some(
					(field) => !field.isValid
				) ||
				!cardHolderName?.current?.value
			) {
				setAlerta({severity:'success',mensaje:'Ingresa un Nombre de Titular valido',vertical:'bottom',horizontal:'right'})
				return
			}
			setPaying(true);			
			hostedField.cardFields
				.submit({
					cardholderName: cardHolderName?.current?.value,
					vault:checked
				})
				.then((data) => {
                    async function liberar(){
                        let services    = await Services('POST-NOT','/registrov2/getOrderPayPal',{evento:evento,orderID:data.orderId,address:'192.10.2.166',isSTC:'S',id_PayTok:'', term:'',interval_duration:''})
                        let dataResp    = await services.data
                        if(dataResp.estatus == "COMPLETED" || dataResp.estatus == "completed"){
                            router.push('/checkout/confirmacion-de-pago')
                        }else{
							setAlerta({severity:'success',mensaje:dataResp.estatus,vertical:'bottom',horizontal:'right'})
                        }
                    }
                    liberar()
				})
				.catch((err) => {
					setPaying(false);
				});
		}
	};

	return (
		<>
            <label title="This represents the full name as shown in the card">
				Nombre
				<input
					id="card-holder"
					ref={cardHolderName}
					className="card-field"
					style={{ ...customStyle, outline: "none" }}
					type="text"
					placeholder="Nombre.."
				/>
				</label>
				<FormControl>
						<FormControlLabel  onChange={({target})=>{setChecked(target.checked)}} control={<Checkbox checked={checked}/>} label="Guardar" />
				</FormControl>
			<button
				className={`btn${paying ? "" : " btn-primary"}`}
				style={{ float: "right" }}
				onClick={handleClick}
			>
				{paying ? <div className="spinner tiny" /> : "Pagar"}
			</button>
			{(alerta.hasOwnProperty('severity'))&&
				<Alertas setAlerta={setAlerta} alerta={alerta}/>
			}
		</>
	);
};

export default function Fields({clientToken,evento,total}) {
	const [appendOption,setAppendOption]  = useState({ type: 'no_installments_option' })
	return (
		<>
			{total}
			{clientToken ? (
				<PayPalScriptProvider
					options={{
						"client-id":"ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_",
						components: "buttons,hosted-fields",
						"data-client-token": clientToken,
						currency: "MXN",
    					locale:"es_MX",
						intent: "capture",
						vault: true,
					}}
				>
					<PayPalHostedFieldsProvider
						styles={{".valid":{"color":"#28a745"},".invalid":{"color":"#dc3545"},"input":{"font-family":"monospace","font-size":"16px"}}}
						createOrder={function () {
							async function orden(){
                                let services    = await Services('POST-NOT','/registrov2/createOrderPayPal',{evento:evento,isSTC:'S'})
                                let data        = await services.data
                                return data
                            }       
                            return orden()
						}}
						installments={{
							onInstallmentsRequested() {	
								alert("Entro")				
								return {amount:total,currencyCode: 'MXN'}					
							},					
							onInstallmentsAvailable(availableInstallments) {					
								var qualifyingOptions = installments && installments.financing_options && installments.financing_options.filter(function (financialOption) {
									return financialOption.product === 'CARD_ISSUER_INSTALLMENTS';
								  });
						
								  var hasCardIssuerInstallment = Boolean(qualifyingOptions && qualifyingOptions.length >= 1 && qualifyingOptions[0].qualifying_financing_options.length > 1);
								  if (!hasCardIssuerInstallment) {
									return;
								  }

								  qualifyingOptions.forEach(function (financialOption) {						
									financialOption.qualifying_financing_options.forEach(function (qualifyingFinancingOption) {
									  setAppendOption({
										type: 'installment_option',
										data: {
										  value: qualifyingFinancingOption.monthly_payment.value,
										  currency_code: qualifyingFinancingOption.monthly_payment.currency_code,
										  interval: qualifyingFinancingOption.credit_financing.interval,
										  term: qualifyingFinancingOption.credit_financing.term,
										  interval_duration: qualifyingFinancingOption.credit_financing.interval_duration,
										  discount_percentage: qualifyingFinancingOption.discount_percentage
										}
									  })
									})						
								  })
							},					
							onInstallmentsError() {					
								alert('Error')					
							},					
						}}					
					>
                        <label htmlFor="card-number">
                           Numero de Trajeta
                            <span style={INVALID_COLOR}>*</span>
                        </label>
                        <PayPalHostedField
                            id="card-number"
                            className="card-field"
                            style={CUSTOM_FIELD_STYLE}
                            hostedFieldType="number"
                            options={{
                                selector: "#card-number",
                                placeholder: "111 111...",
                            }}							
                        />
                        <label htmlFor="cvv">
                            CVV<span style={INVALID_COLOR}>*</span>
                        </label>
                        <PayPalHostedField
                            id="cvv"
                            className="card-field"
                            style={CUSTOM_FIELD_STYLE}
                            hostedFieldType="cvv"
                            options={{
                                selector: "#cvv",
                                placeholder: "000",
                                maskInput: true,
                            }}
                        />
                        <label htmlFor="expiration-date">
                            Fecha
                            <span style={INVALID_COLOR}>*</span>
                        </label>
                        <PayPalHostedField
                            id="expiration-date"
                            className="card-field"
                            style={CUSTOM_FIELD_STYLE}
                            hostedFieldType="expirationDate"
                            options={{
                                selector: "#expiration-date",
                                placeholder: "MM/YYYY",
                            }}
                        />
						{(appendOption.type === 'no_installments_option')?
						<h1>NO Aplica</h1>
						:
						<h1>Aplica</h1>
						}
						<SubmitPayment customStyle={{"border":"1px solid #606060","boxShadow":"2px 2px 10px 2px rgba(0,0,0,0.1)"}} evento={evento}/>
					</PayPalHostedFieldsProvider>
				</PayPalScriptProvider>
			) : (
				<h1>Cargando token...</h1>
			)}
		</>
	);
}