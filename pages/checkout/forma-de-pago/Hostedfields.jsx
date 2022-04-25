import {
    PayPalScriptProvider,
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    usePayPalHostedFields,
} from "@paypal/react-paypal-js";
//Material
import { Radio,RadioGroup,FormControlLabel,FormControl,
    List,ListItem,ListItemText,ListItemAvatar, ListItemSecondaryAction,
    Box,Grid,Button,Avatar,Typography,Card, Divider,Skeleton} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import makeStyles from '@mui/styles/makeStyles';
    const useStyles = makeStyles((theme) => ({
        rootcardi: {
            margin: theme.spacing(1), 
            height:'14.5rem', 
        },
    }));

const initialOptions = {
    "client-id": "ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_",
    "data-client-token": "eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiNjI0YmJkOTc1MjkyMDc0M2M2ZDcyNzRiNTU0MmJhN2RkMjUzMWJhNTE2YjdkMjIxZWRhNzQzOWJkMTUxZjQ2YnxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9ajJmYzJqcHhkZzZ2cDg0ZiZjcmVhdGVkX2F0PTIwMjItMDQtMTlUMTM6MTE6NTIuMDM0WiZjdXN0b21lcl9pZD04Mzk0OTMiLCJ2ZXJzaW9uIjoiMy1wYXlwYWwifSwicGF5cGFsIjp7ImlkVG9rZW4iOm51bGwsImFjY2Vzc1Rva2VuIjoiQTIxQUFQbjRUNFh0V3hTR3FVODQ1SzJZMlJRenlGcVVDNURKZHoySXNaTnV2d0lSN1ZBcWdjaDBGeHF0aWtYOW9YbFlKdERBNmpiQTdQRDNoTFB5WHg3LTkwNjRDSDEwdyJ9fQ==",
    currency: "MXN",
    locale:"es_MX",
    components: "buttons,hosted-fields",
    intent: "capture",
	vault: false,
};


const SubmitPayment = () => {
    // Here declare the variable containing the hostedField instance
    const fields = usePayPalHostedFields();

    const submitHandler = () => {
        alert(Object.values(fields))
        if (!typeof fields.submit !== "function") return; // validate that `submit()` exists before using it
        alert('Paso')
        /*hostedFields
            .submit({
                // The full name as shown in the card and billing address
                cardholderName: "John Wick",
            })
            .then((order) => {
                alert(order)
            });*/
    };

    return <button onClick={submitHandler}>Pay</button>;
};

export default function Hostedfields({clientToken,salectOption,tajetaSave}) {
    
    const brand ={
    VISA:       'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/visa.svg',
    MASTERCARD: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/mastercard.svg',
    DISCOVER: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/DISCOVER.svg',
    AMEX: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/AMEX.svg',
    SOLO: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/solo.svg',
    JCB: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/JBC.svg',
    STAR: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/Military-star.svg',
    DELTA: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/Delta.svg',
    SWITCH: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/Switch.svg',
    MAESTRO: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/maestro.svg',
    CB_NATIONALE: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/cb.svg',
    CONFIGOGA: '',
    CONFIDIS: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/confidis.svg',
    ELECTRON: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/electron.svg',
    CETELEM: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/cetelem.svg',
    CHINA_UNION_PAY: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/unionpay.svg',
    }

    return (    
        <>
        {(clientToken.getPaymentTokens.length > 0 && tajetaSave.id !== 'nueva')?
        <>
            <RadioGroup aria-label="gender" name="tarjeta_guardada" value={tajetaSave.id} onChange={salectOption}>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                    <FormControlLabel key="nueva" value="nueva" fullWidth label={                                                            
                        <Box component="div" py={2}>
                                <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                    <Grid item xs={3} >
                                        <Box component="div" ml={1}>
                                            <Avatar sx={{ backgroundColor:'#3655a6',}}>
                                                <AddOutlinedIcon />
                                            </Avatar>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9}>                                    
                                        <ListItemText id="list-label-payment-method" color="primary" primary={
                                        <Typography component="subtitle2" sx={{ fontWeight:'500',}} color="primary">Agregar nueva</Typography>
                                            }/>
                                    </Grid>
                                </Grid>
                        </Box>
                    } control={<Radio />}/> 
                    </Grid>
                    <Grid item xs={6}>
                    {clientToken.getPaymentTokens.map((tarjeta, index) => (  
                    <Box component="div">
                        
                            <FormControlLabel key={index} value={tarjeta.id} fullWidth label={                                                            
                                <Box component="div">
                                    <Grid container direction="row-reverse"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                        <Grid item xs={4}>
                                            <img src={brand[tarjeta.brand]} alt={"Paga en linea con "+tarjeta.brand} />
                                        </Grid>
                                        <Grid item xs={8}>  
                                            <Box component="div" ml={1}>                                 
                                                <ListItemText id="list-label-payment-method" primary={
                                                    <Typography component="subtitle2" sx={{ fontWeight:'500',}} >
                                                        {tarjeta.id}
                                                    </Typography>
                                                }/>
                                            </Box> 
                                        </Grid>
                                    </Grid>   
                                </Box>
                            } control={<Radio />}/>
                        
                    </Box>
                        

                    ))
                    }
                   
                    </Grid>
                </Grid>
            </RadioGroup>
            </>
           
        :
        
        <PayPalScriptProvider
            options={initialOptions}
        >
            <PayPalHostedFieldsProvider
                createOrder={() => {
                    // Here define the call to create and order
                    async function orden(){
                        let services    = await Services('POST-NOT','/registrov2/createOrderPayPal',{evento:3250091,isSTC:'S'})
                        let data        = await services.data
                        alert(data)
                        return data
                    }       
                    return orden()
                }}
            >
                <PayPalHostedField
                    id="card-number"
                    hostedFieldType="number"
                    options={{ selector: "#card-number",
                    placeholder: "Tarjeta"
                    }}
                />
                <PayPalHostedField
                    id="cvv"
                    hostedFieldType="cvv"
                    options={{ selector: "#cvv" ,
                    placeholder: "CVV"}}
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
        }
        </>
        
    );
}

