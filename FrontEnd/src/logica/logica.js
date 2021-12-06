import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://yo-parqueo-server.herokuapp.com/api";

export default {
    register(formValues){
        const parqueadero=formValues;
        return axios.post("/parqueadero-nuevo",parqueadero); 
    },
    regCeldasCarro(celda){
        const parqueadero=celda;
        return axios.post("/celdasCarro-nuevo",parqueadero); 
    },
    getCeldasCarro(id){
        return axios.get(`/celdasCarro/${id}`)
    },
    regCeldasMoto(celda){
        const parqueadero=celda;
        return axios.post("/celdasMoto-nuevo",parqueadero); 
    },
    getCeldasMoto(id){
        return axios.get(`/celdasMoto/${id}`)
    },
    getParqueadero(id){
        return axios.get(`/parqueadero/${id}`)
    },
    regUsers(formValues){
        const user=formValues;
        return axios.post("/usuarios-nuevo",user); 
    },
    loginUsers(formValues){
        const usuario=formValues;
        return axios.get("/usuarios",usuario); 
    },
    getUser(id){
        return axios.get(`/usuarios/${id}`)
    },
    getUs(usuario){
        return axios.get(`/usuarios-usuario/${usuario}`)
    },
    putCeldasCarro(id,celda){
        return axios.put(`/celdasCarro/${id}`,celda)
    },
    putCeldasMoto(id,celda){
        return axios.put(`/celdasMoto/${id}`,celda)
    },
    setUserLogged(userlogged) {
        Cookies.set("user", userlogged.user);
        Cookies.set("idparq", userlogged.idparq);
    },
    getUserLogged() {
        const usuario = {
            user : Cookies.get("user"),
            idparq : Cookies.get("idparq"),
        }
        return usuario
    },
    deleteUserLogged() {
        Cookies.remove("idparq")
        Cookies.remove("user")
    }
}