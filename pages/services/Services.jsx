import axios from 'axios'
const PATH ='http://192.10.2.166:8080/rest';



function Services(metodo,url,json) {
    switch (metodo) {
        case 'POST':
          return getMetodPost(url,json)
          break;
        case 'GET':
        return getMetodGet(url,json)
          break;
        case 'PUT':
          return getMetodPut(url,json)
          break;
        case 'DELETE':
          getMetodDelete(url,json)
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

    async function getMetodGet(url,json){
        json.headers ={
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
        }
        return axios.get(PATH+url,json);
    }

    function getMetodPut(url,json){
        json.headers ={
            'Content-Type': 'application/json',
            'Access-control-Allow-Origin' : '*',
            'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
        }
        return axios.put(PATH+url,json);
    }

    function getMetodDelete(url,json){
        return axios.delete(PATH+url,json);
    }
}


export default Services