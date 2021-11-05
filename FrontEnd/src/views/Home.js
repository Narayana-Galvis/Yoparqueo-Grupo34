import AsideNab from "../components/AsideNab"
import Contenedor from "../components/Contenedor";
import Login from "../components/Login";
import Register from "../components/Register";
import Reservar from "../components/Reservar";

function Home() {
    const msg="home"
    return (
        <div className="Home">
            <AsideNab msg={msg}/>
            <Contenedor msg={msg}/>
            <Login />
            <Register />
            <Reservar />
        </div>
    )
}
export default Home;