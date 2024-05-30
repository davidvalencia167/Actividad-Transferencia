import React from 'react';
import banner from '../assets/images/banner.jpg';
import Card from './Card';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <img src={banner} className="img-fluid" alt="Banner" />
        <h1 className="display-4 mt-4">Bienvenido a MyWebsite</h1>
        <p className="lead">Aquí encontrarás información relevante sobre nosotros y nuestros servicios.</p>
        <hr className="my-4" />
        <p>Explora nuestra página para saber más.</p>
        <a className="btn btn-primary btn-lg" href="/about" role="button">Sobre Nosotros</a>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <Card
            title="Servicio 1"
            text="Descripción del Servicio 1. Proporcionamos servicios de alta calidad."
            link="/service1"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Servicio 2"
            text="Descripción del Servicio 2. Proporcionamos servicios de alta calidad."
            link="/service2"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Servicio 3"
            text="Descripción del Servicio 3. Proporcionamos servicios de alta calidad."
            link="/service3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;