import {useRouter} from 'next/router'
//Servicios
import Services from '../services/Services'

export default function FichaTecnica(props){
    const ruter = useRouter() 

    return (
        <div>
            <div>Hola ficha {ruter.query.url}</div>
            <h1>-{props.data.descripcion.descripcion.descripcionUno}-</h1>
            sss
        </div>
    )    
}

export async function getServerSideProps(context) {
    let services        = await Services('POST','/fichaTecnica/obtieneItemCompleto?url='+context.params.url,{})
    let data            = await services.data
    data.descripcion    = await JSON.parse(data.descripcion);
    console.log(data)
    return {
      props: {
          data : data
      },
    }
}
