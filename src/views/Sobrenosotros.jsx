export default () => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", position: "relative", zIndex: 2 }}>
                <h3>¡Acerca de Happy Cake! 🧁🎂</h3>
                
                <div className="mensaje" style={{ marginTop: "10px" }}>
                    <h6>Somos una pastelería de renombre que se especializa en pasteles personalizados y postres exquisitos para endulzar tus momentos especiales. Estamos emocionados de compartir contigo nuestras creaciones únicas.</h6>
                    <h6>¿Quieres mantenerte al tanto de nuestras ofertas especiales y actualizaciones? </h6>
                    <h6>¡Suscríbete a nuestro contacto y sé el primero en enterarte de nuestras promociones exclusivas y eventos especiales!</h6>
                </div>
                <img
                    style={{
                        width: "300px",
                        opacity: 0.7,
                    }}
                    src="/src/img/cake.gif"
                    alt="pastel"
                />
            </div>
        </div>
    )
}
