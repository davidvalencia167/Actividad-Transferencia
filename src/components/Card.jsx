import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, text, link }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary">Leer Más</Link>
      </div>
    </div>
  );
}

export default Card;