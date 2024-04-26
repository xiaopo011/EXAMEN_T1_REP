import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFormData = {
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showData, setShowData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowData(true);
    setTimeout(() => {
        setShowData(false);
        setFormData(initialFormData); // Reset formData to initial values
    }, 7000); // Blanquear datos y ocultar después de 7 segundos
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="App">
      <div className="container">
        {showData ? (
          <div className="data-container">
            <h1>Datos del Estudiante</h1>
            <div className="data">
              <p><strong>Nombres:</strong> {formData.nombres}</p>
              <p><strong>Apellidos:</strong> {formData.apellidos}</p>
              <p><strong>Fecha de Nacimiento:</strong> {formData.fechaNacimiento}</p>
              <p><strong>Dirección:</strong> {formData.direccion}</p>
              <p><strong>Teléfono:</strong> {formData.telefono}</p>
            </div>
          </div>
        ) : (
          <div className="form-container">
            <h1>Registro de Estudiantes</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombres:</label>
                <input
                  type="text"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Apellidos:</label>
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Fecha de Nacimiento:</label>
                <input
                  type="text"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Dirección:</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Teléfono:</label>
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <button className="large-button" type="submit">Registrar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
