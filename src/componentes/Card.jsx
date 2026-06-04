import React, { useState } from 'react';

function Card({ zapato, alAnadirAlCarrito }) {
  // Estado local para mostrar u ocultar el precio
  const [mostrarPrecio, setMostrarPrecio] = useState(true);

  return (
    <div className="card">
      <img src={zapato.imagen} alt={zapato.modelo} className="card-img" />
      <h3>{zapato.modelo}</h3>
      
      {/* Si mostrarPrecio es true, se renderiza el precio */}
      {mostrarPrecio && <p className="precio">${zapato.precio}</p>}
      
      <div className="card-botones">
        {/* Botón dinámico para alternar el estado del precio */}
        <button 
          className="btn-secundario" 
          onClick={() => setMostrarPrecio(!mostrarPrecio)}
        >
          {mostrarPrecio ? 'Ocultar Precio' : 'Mostrar Precio'}
        </button>

        {/* Botón para añadir al carrito */}
        <button 
          className="btn-comprar" 
          onClick={() => alAnadirAlCarrito(zapato)}
        >
          Añadir al carro
        </button>
      </div>
    </div>
  );
}

export default Card;