
function Precios(accion,json){
    switch (accion) {
        case 'redondear_arriba':
          return Calculoprecio(json)
          break;
        case 'formatcurrency':
          return formatcurrency(json)
          break;
        case 'formato':
          return formato(json)
          break;
        default:
          return null
    }


    function Calculoprecio(json){
        const precio    = (parseFloat(json.subtotal)+(parseFloat(json.subtotal)*parseFloat(json.iva)))
        var   enteros   = 0;
        var   decimales = '00';
        if(precio > 0){
            const   sepPrecio = precio.toString().split('.')
                    enteros   = sepPrecio[0]
            if(sepPrecio.length > 1){
                const  sepDec   = (sepPrecio[1].length === 1)?sepPrecio[1]+'0':sepPrecio[1].substring(0,2).toString().split('')
                decimales       = (sepDec[1] > 4)?(parseFloat(sepDec[0])+1).toString()+'0':sepDec[0]+'0';
    
                if(parseFloat(decimales) >= 100){
                    enteros     = (parseInt(enteros)+1).toString()
                    decimales   = '00'
                }
            }        
        } 
        if(json.hasOwnProperty('formato')){
            if(json.formato){
                enteros = formato(enteros)
            }
        }
        return enteros+"."+decimales
    }

    function formatcurrency(json){
        return Formater(parseFloat(json.subtotal).toFixed(json.fixed));
    }

    function formato(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
}

export default Precios;