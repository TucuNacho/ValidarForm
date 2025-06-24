import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const FormValido = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [DNI, setDNI] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="container bg-info-subtle rounded mt-3 py-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juanito"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Perez"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="DNI">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              placeholder="12.345.678"
              onChange={(e) => setDNI(e.target.value)}
              value={DNI}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="JuanitoPerez@gmail.com"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
            />
          </Form.Group>

          <Button type="submit">Enviar</Button>
        </Form>
      </section>
    </>
  );
};

export default FormValido;
