import React, { useState } from 'react';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import zapato1 from './assets/Imagenes/zapato1.webp'
import zapato2 from './assets/Imagenes/zapato2.png'
import zapato3 from './assets/Imagenes/zapato3.png'
import './App.css';

function App() {
  // Datos de los zapatos
  const zapatos = [
    { id: 1, modelo: "Air Jordan reto ", precio: 120, imagen: zapato1 },
    { id: 2, modelo: "Jordan Reto 4 negros", precio: 250, imagen: zapato2},
    { id: 3, modelo: "Air Jordan Spizike", precio: 450, imagen: zapato3}
  ];

  // Estado para almacenar los zapatos añadidos al carrito
  const [carrito, setCarrito] = useState([]);

  // Función para añadir un zapato al carrito
  const añadirAlCarrito = (zapato) => {
    setCarrito([...carrito, zapato]);
  };

  // Cálculos dinámicos con JavaScript
  const totalPares = carrito.length;
  
  // CORRECCIÓN AQUÍ: Usamos directamente item.precio que es la propiedad real
  const valorTotal = carrito.reduce((suma, item) => suma + item.precio, 0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <main id="productos" className="productos-container">
        <h2>Modelos más pedidos</h2>
        <div className="productos-grid">
          {zapatos.map((zapato) => (
            <Card 
              key={zapato.id}
              zapato={zapato}
              alAnadirAlCarrito={añadirAlCarrito}
            />
          ))}
        </div>
      </main>

      {/* Sección del Carrito de Compras al final */}
      <section className="resumen-carrito">
        <h3>Resumen de tu Pedido</h3>
        <div className="resumen-detalles">
          <p>Pares comprados: <strong>{totalPares}</strong></p>
          <p>Valor total: <strong className="precio-total">${valorTotal}</strong></p>
        </div>
        {totalPares > 0 && (
          <button className="btn-vaciar" onClick={() => setCarrito([])}>
            Vaciar Carrito
          </button>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;