import axios from 'axios'
const PATH ='https://api-pickup.pedidos.com/API-Rest';

/*const  Services= ()=>{
    async function getObtieneItemCompleto(url){
        return await axios.post(FICHA_TECNICA_API_URL+'/fichaTecnica/obtieneItemCompleto?url='+url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',

        }});

    }
}*/



function Services(expr,url,json) {
    switch (expr) {
        case 'POST':
          return getMetodPost(url,json)
          break;
        case 'GET':
        return getMetodGet(url)
          break;
        case 'PUT':
          return getMetodPut(url)
          break;
        case 'DELETE':
          getMetodDelete(url)
          break;
        default:
          return null
    }

    async function getMetodPost(url,json){
        json.headers ={
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
        }
        return await axios.post(PATH+url,json)
    }

    async function getMetodGet(url){
        return axios.get(PATH+url,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',

            }
        });
    }

    function getMetodPut(url){
        return axios.put(PATH+url,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',

            }
        });
    }

    function getMetodDelete(url){
        return axios.delete(PATH+url,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',

            }
        });
    }
}


export default Services