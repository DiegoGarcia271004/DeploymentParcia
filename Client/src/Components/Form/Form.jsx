import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mail: "",
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Limpiar formulario
  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      mail: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si el servidor responde correctamente
        resetForm(); // Limpiar el formulario después del envío exitoso
        window.location.reload();
      } else {
        // Si hay un error en la respuesta del servidor
        alert("Ingrese valores válidos");
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div>
      <h1>Sistema de registro de Usuarios</h1>
      <div className="card">
        <span className="card__title">Registrar Usuarios</span>
        <form onSubmit={handleSubmit} id="form">
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Edad:</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              name="mail"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="buttons">
            <button className="sign-up" type="submit">
              Enviar
            </button>
          </div>
        </form>
        <button className="delete" onClick={resetForm}>
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default Form;
