function Notice({msg}) {
    if (msg) {
        return(
            <div>
                <p>{msg.fecha}</p>
                <p>{msg.actualizacion}</p>
            </div>
        )
    } else {
        return(
            <div>
                <p>05/10/2021</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
            </div>
        )
    }
}

export default Notice
