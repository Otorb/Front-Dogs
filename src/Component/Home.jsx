import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  filterTemperament,
  filterCreate,
  sortByName,
  orderWeight,
} from "../redux/axios/index";
import Card from "./Card";
import Paginado from "./Page";
import Search from "./SearchBar";
import Navbar from "./Navbar";
import "../style/Home.css";
import Error from "../error/error.png";
import cargando from "../images/cargando.gif";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, []);

  const [orderName, setOrderName] = useState();
  const [orderbyWeight, setOrderWeight] = useState();

  //paginado

  const [paginaActual, setPaginaActual] = useState(1);
  const [dogPorPagina, setDogPorPagina] = useState(8);
  const iDelUltimo = paginaActual * dogPorPagina;
  const iDelPrimero = iDelUltimo - dogPorPagina;
  const dogsActuales = dogs.slice(iDelPrimero, iDelUltimo);

  const paginado = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  //filtrados

  function handleReset(e) {
    e.preventDefault(e);
    dispatch(getDogs());
    dispatch(getTemperaments());
  }

  function handleTemperament(e) {
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));
  }

  function handleCreate(e) {
    e.preventDefault();
    dispatch(filterCreate(e.target.value));
  }

  function handleName(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setPaginaActual(1);
    setOrderName(`${e.target.value}`);
  }

  function handleWeight(e) {
    e.preventDefault();
    dispatch(orderWeight(e.target.value));
    setPaginaActual(1);
    setOrderWeight(`${e.target.value}`);
  }

  return (
    <div>
      <Navbar />
      <div className="home">
        <Paginado
          // paginaActual= {paginaActual}
          dogPorPagina={dogPorPagina}
          dogs={dogs.length}
          paginado={paginado}
        />
        <button
          onClick={(e) => {
            handleReset(e);
          }}
        >
          Limpiar Filtros
        </button>
        <Search />

        <div>
          <select onChange={(e) => handleName(e)} defaultValue="all">
            <option value="all" disabled hidden>
              Filter By Name
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>

          <select onChange={(e) => handleWeight(e)} defaultValue="WH">
            <option value="WH" disabled hidden>
              Filter By Weight
            </option>
            <option value="WeiAsc">Min Weight</option>
            <option value="WeiDesc">Max Weight</option>
          </select>

          <select onChange={(e) => handleTemperament(e)} defaultValue="default">
            <option value="default" disabled hidden>
              Filter By Temperament
            </option>
            {temperaments &&
              temperaments.map((temp) => (
                <option key={temp.id}>{temp.name}</option>
              ))}
          </select>

          <select onChange={(e) => handleCreate(e)} defaultValue="all">
            <option value="all" disabled hidden>
              Filter By Origin
            </option>
            <option value="api">From Api</option>
            <option value="created">created for us</option>
          </select>

          <div className="padre">
            {!dogs.length && (
              <div className="desapare">
                <img src={cargando} alt="wait" className="carga" />
                <p>Loading...</p>
              </div>
            )}
            {!dogs.length > 0 && (
              <div>
                <h2>I'm sorry I can't to find it</h2>
                <img className="error" src={Error} alt="not found" />
              </div>
            )}
            <div>
              {dogsActuales?.map((dog) => {
                return (
                  <Card
                    id={dog.id}
                    key={dog.id}
                    name={dog.name}
                    image={dog.image}
                    temperament={dog.temperament}
                    weight={dog.weight}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
