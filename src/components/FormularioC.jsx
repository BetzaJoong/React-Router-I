import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormularioContacto() {
    const [mensaje, setMensaje] = useState('');
    const [mensajeColor, setMensajeColor] = useState('');
    const [correo, setCorreo] = useState(''); 
    const [descripcion, setDescripcion] = useState('');

    const validarCorreo = (correo) => {
        // Expresión regular para validar el formato de correo electrónico
        const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regexCorreo.test(correo);
    };

    const handleEnviarClick = () => {
        if (correo.trim() === '' || descripcion.trim() === '') {
            setMensaje('Debes responder correctamente este formulario');
            setMensajeColor('red');
        } else if (!validarCorreo(correo)) {
            setMensaje('El formato del correo electrónico no es válido');
            setMensajeColor('red');
        } else {
            setMensaje('Los datos se han guardado con éxito');
            setMensajeColor('green');
            setTimeout(() => {
                setMensaje('');
                setMensajeColor('');
                setCorreo('');
                setDescripcion('');
            }, 2000);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ margin: '50px' }}>
            <Form style={{ width: '75%' }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Form.Group>
                <Button variant="danger" onClick={handleEnviarClick}>
                    Enviar
                </Button>
                <div style={{ color: mensajeColor, marginTop: '10px' }}>
                    {mensaje}
                </div>
            </Form>
        </div>
    );
}

export default FormularioContacto;

