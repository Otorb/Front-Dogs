import React from "react";
import "../style/Paginado.css";

export default function Page({ dogPorPagina, dogs, paginado, paginaActual }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(dogs / dogPorPagina); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="funcion">
      <ul className="nose">
        {
          pageNumbers?.map(number => (
              <li className="number" key={number} >
            <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
        {/* <li className="number">
          <a onClick={() => paginado(paginaActual - 1)}>{paginaActual - 1}</a>
        </li>
        <li className="number">
          <a >{paginaActual}</a>
        </li>
        <li className="number">
          <a onClick={() => paginado(paginaActual + 1)}>{paginaActual + 1}</a>
        </li> */}
      </ul>
    </div>
  );
}
