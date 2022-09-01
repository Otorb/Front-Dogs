import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_DOG = "SEARCH_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const FILTER_CREATE = "FILTER_CREATE";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_WEIGHT = "ORDER_WEIGHT";
export const POST_DOG = "POST_DOG";
export const DETAIL_DELETE = "DETAIL_DELETE";

export const getDogs = () => (dispatch) => {
  return fetch("http://localhost:3001/dogs/")
    .then((resp) => resp.json())
    .then((json) =>
      dispatch({
        type: "GET_DOGS",
        payload: json,
      })
    );
};

export const getDetail = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/dogs/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch({ type: "GET_DETAIL", payload: json }));
};

export function searchDog(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/dogs?name=${name}`);

      return dispatch({
        type: SEARCH_DOG,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: SEARCH_DOG,
        payload: [],
      });
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/temperaments");

    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}

export function filterTemperament(payload) {
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
}

export function filterCreate(payload) {
  return {
    type: FILTER_CREATE,
    payload,
  };
}

export function sortByName(payload) {
  return {
    type: ORDER_NAME,
    payload,
  };
}

export function orderWeight(payload) {
  return {
    type: ORDER_WEIGHT,
    payload,
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:3001/dogs/", payload);
      return dispatch({
        type: POST_DOG,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function detailDelete(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.delete("http://localhost:3001/dogs/", payload);
      return dispatch({
        type: DETAIL_DELETE,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
