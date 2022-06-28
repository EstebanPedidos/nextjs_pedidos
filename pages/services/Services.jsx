import axios from 'axios'
const PATH ='https://api-pickup.pedidos.com/API-Rest'
// const PATH ='http://localhost:8080/rest'
          
function Services(metodo,url,json) {
    switch (metodo) {
        case 'POST':
          return getMetodPost(url,json)
          break;
        case 'POST-NOT':
          return getMetodPost_not(url,json)
          break;
        case 'POST-PAYPAL':
          return getMetodPostPayPal(url,json,pedido)
          break;
        case 'GET':
        return getMetodGet(url,json)
          break;
        case 'PUT':
          return getMetodPut(url,json)
          break;
        case 'PUT-NOT':
          return getMetodPut_not(url,json)
          break;
        case 'DELETE':
          return getMetodDelete(url,json)
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

    async function getMetodPostPayPal(url,json,pedido){
        json.headers ={
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            'PayPal-Client-Metada-Id:': pedido.toString(),
        }
        return await axios.post(PATH+url,json)
      }

    async function getMetodPost_not(url,json){
      return await axios.post(PATH+url,json)
    }

    async function getMetodGet(url,json){
        json.headers ={
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
        }
        return axios.get(PATH+url,json);
    }

    async function getMetodPut(url,json){
        json.headers ={
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
        }
        return axios.put(PATH+url,json);
    }

    async function getMetodPut_not(url,json){
      return axios.put(PATH+url,json);
    }

    async function getMetodDelete(url,json){
      json.headers ={
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin' : '*',
        'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
      }
      return await axios.delete(PATH+url,json);
    }
}


export default Services