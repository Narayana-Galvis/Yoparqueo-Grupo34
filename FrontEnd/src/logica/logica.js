import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:3000/api";

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
        return axios.get(`/parqueadero/${id}`)
    },
    regCeldasMoto(celda){
        const parqueadero=celda;
        return axios.post("/celdasMoto-nuevo",parqueadero); 
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
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
    },
    getUserLogged() {
        return Cookies.get("userLogged");
    },
    deleteUserLogged() {
        Cookies.remove('userLogged');
    }
}