import React from "react";
// import '../../styles/ListFrutas.css'
import '../../styles/Actividades/ListActividades.css';
import { Link } from "react-router-dom";

const renderEstilos = (estilos) => {
  return estilos.map((estilo, i) => (
    <article className="article_activity">
      <Link to={`./${estilo._id}`} style={{ textDecoration: "none" }} key={i}>
        <li key={estilo.id} className="actividad">
          <div className="actividad-imageContainer">
            <img
              src={estilo.estiloImg}
              alt={estilo.estiloName}
              className="actividad-image"
            />
          </div>
          <div className="actividad-info">
            <h2 className="actividad-name">
              {estilo.estiloName} 
            </h2>
       
            
         
            <p className="actividad_precio">Precio:{estilo.estiloPrice}€</p>
          </div>
        </li>
      </Link>
    </article>
  ));
};
const ListEstilos = ({ estilos }) => {
  return <section>{renderEstilos(estilos)}</section>;
};
export default ListEstilos;
