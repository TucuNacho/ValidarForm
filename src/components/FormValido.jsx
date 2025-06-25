import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
const FormValido = () => {
  const FormLocalStorage = JSON.parse(localStorage.getItem("Formulario")) || [];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: FormLocalStorage.nombre || "",
      apellido: FormLocalStorage.apellido || "",
      DNI: FormLocalStorage.DNI || "",
      mail: FormLocalStorage.mail || "",
    },
  });

  const agregarDatos = (data) => {
    localStorage.setItem("Formulario", JSON.stringify(data));
    reset();
  };
  return (
    <>
      <section className="container bg-info-subtle rounded mt-3 py-3">
        <Form onSubmit={handleSubmit(agregarDatos)}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juanito"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe contener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 20,
                  message: "El nombre debe contener 20 caracteres como maximo",
                },
              })}
            />
               <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Perez"
              {...register("apellido", {
                required: "El apellido es obligatorio",
                minLength: {
                  value: 3,
                  message: "El apellido debe contener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 20,
                  message:
                    "El apellido debe contener 20 caracteres como maximo",
                },
              })}
            />
             <Form.Text className="text-danger">{errors.apellido?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="DNI">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              placeholder="12.345.678"
              {...register("DNI", {
                required: "El DNI es un dato obligatorio",
                pattern: {
                  value: /^\d{8}$/,
                  message: "Debe tener exactamente 8 números",
                },
              })}
            />
             <Form.Text className="text-danger">{errors.DNI?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="mail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="JuanitoPerez@gmail.com"
              {...register("mail", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message: "Debe ser un email válido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.mail?.message}
            </Form.Text>
          </Form.Group>

          <Button type="submit">Enviar</Button>
        </Form>
      </section>
    </>
  );
};

export default FormValido;
