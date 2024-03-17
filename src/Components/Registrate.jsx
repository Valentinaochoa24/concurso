import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

function redirectToUrl(url) {
    window.location.href = url;
}
function Registrate() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        contrasena: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1/:8000/api/usuario', formData);
            console.log(response.data);
            // Puedes agregar lógica adicional aquí, como mostrar un mensaje de éxito al usuario
        } catch (error) {
            console.error(error);
            // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario
        }
    };

    return (
        <Container>
            <h1>Regístrate</h1>
            <Row>
                <Col>
                    {/* <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="text" placeholder="Correo" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contrasena">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" name="contrasena" value={formData.contrasena} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">Registrarme</Button>
                    </Form> */}
                    <div>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="text" placeholder="Correo" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contrasena">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" name="contrasena" />
                        </Form.Group>
                        <Button variant="dark" onClick={() => redirectToUrl("https://4235-191-156-42-121.ngrok-free.app/api/streams")}>Registrarme</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Registrate;
