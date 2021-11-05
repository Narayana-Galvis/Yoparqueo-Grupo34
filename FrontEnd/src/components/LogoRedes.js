function LogoRedes({msg}) {
    if (msg==="facebook") {
        return(
            <div className="LogoRedes">
                <i className="fab fa-facebook"></i>
            </div>
        )
    }
    if (msg==="github") {
        return(
            <div className="LogoRedes">
                <i className="fab fa-github"></i>
            </div>
        )
    } 
    if (msg==="twitter") {
        return(
            <div className="LogoRedes">
                <i className="fab fa-twitter"></i>
            </div>
        )
    } 
    if (msg==="instagram") {
        return(
            <div className="LogoRedes">
                <i className="fab fa-instagram"></i>
            </div>
        )
    }     
}

export default LogoRedes