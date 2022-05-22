function RandomUser(){
    let usuario = Math.floor((Math.random() * (10000-1))+1);
    if (typeof window !== 'undefined') {
        localStorage.setItem('Usuario', usuario)
    }
    return usuario
}
export default RandomUser;