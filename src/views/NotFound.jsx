import React from 'react';

function NotFound() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}></div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2, color: "white", textAlign: "center", padding: "120px" }}>
                <h1 style={{ fontSize: "40px" }}>¡Muy pronto Happy Cake llegará a tu hogar!</h1>
                <p style={{ fontSize: "18px" }}>La página que estás buscando no esta disponible aún. Puedes volver a nuestra página de inicio para seguir explorando nuestro sitio.</p>
                <a href="/" style={{ textDecoration: "underline", color: "white" }}>Volver a la página de inicio</a>

                <img src="/src/img/error.gif" alt="Imagen de Error" style={{ maxWidth: "100%", marginTop: "40px" }} />

            </div>
        </div>
    );
}

export default NotFound;
