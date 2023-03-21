import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './estilos.css';

function Productos(props) {
  const [contador, setCount] = useState(props.initialNumber);
  const [productos, setProductos] = useState([]);

  const handleClick = () => {
    setCount(contador + 1);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="productos">
      {contador}
      <button className="boton" onClick={handleClick}>
        Click
      </button>
      <Slider {...settings}>
        {productos.map((producto, index) => (
          <div key={index}>
            <h1>{producto.title}</h1>
            <img className="imagenes" src={producto.images[0]} alt="Producto" />
            <p className="p">
              <b>Precio:</b> {producto.price}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Productos;
