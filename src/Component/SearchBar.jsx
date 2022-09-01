import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDog } from "../redux/axios/index";
import buscar from "../images/buscar.png";
import "../style/Search.css";

export default function SearchBar() {
  let dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault(e);
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    if (!search) {
      return alert("put a name");
    } else if (!search.length === 0) {
      return alert("this is not a dog name");
    }
    dispatch(searchDog(search));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        {" "}
        <img
          className="busqueda"
          src={buscar}
          width="50px"
          height="30px"
        />{" "}
      </button>
    </div>
  );
}
