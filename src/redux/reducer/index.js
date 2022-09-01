import {
    GET_DOGS, 
    GET_DETAIL,
    SEARCH_DOG,
    GET_TEMPERAMENTS,
    FILTER_TEMPERAMENT,
    FILTER_CREATE,
    ORDER_NAME,
    ORDER_WEIGHT,
    POST_DOG,
    DETAIL_DELETE,

} from '../axios/index';

const initialState = {
    dogs: [],
    allDogs: [],
    detail:[],
    temperaments: [],
}

function reducer (state = initialState, action) {

    const allDogs = state.allDogs

    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        case SEARCH_DOG:
            return{
                ...state,
                dogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }
        case FILTER_TEMPERAMENT:
            if (action.payload === "all") {
                return {
                  ...state,
                  dogs: allDogs
                };
              }
              const filteredDogs = allDogs.filter((dog) => dog.temperament?.includes(action.payload));
        
              return {
                ...state,
                dogs: filteredDogs
              };
        case FILTER_CREATE:
            if (action.payload === "created") {
        
                const dogsCreated = allDogs.filter((dog) => dog.createInDb);
        
                return {
                  ...state,
                  dogs: dogsCreated
                }
              }
              if (action.payload === "api") {
        
                const dogsFromApi = allDogs.filter((dog) => !dog.createInDb);
        
                return {
                  ...state,
                  dogs: dogsFromApi
                };
              }
              return {
                ...state,
                dogs: allDogs
              };
        case ORDER_NAME:
            if (action.payload === "asc") {

                const ascName = state.dogs.sort((a, b) => {
                  if (a.name > b.name) return 1;
                  if (b.name > a.name) return -1;
                  return 0;
                });
        
                return {
                  ...state,
                  dogs: ascName
                }
              }
              if (action.payload === "desc") {
        
                const descName = state.dogs.sort((a, b) => {
                  if (a.name < b.name) return 1;
                  if (b.name < a.name) return -1;
                  return 0;
                });
        
                return {
                  ...state,
                  dogs: descName
                }
              }
              return {
                ...state,
                dogs: allDogs
              };
        case ORDER_WEIGHT:
            if (action.payload === "WeiAsc") {

                const ascweight = state.dogs.sort((a, b) => {
                  if (a.weight > b.weight) return 1;
                  if (b.weight > a.weight) return -1;
                  return 0;
                });
        
                return {
                  ...state,
                  dogs: ascweight
                }
              }
              if (action.payload === "WeiDesc") {
        
                const descweight = state.dogs.sort((a, b) => {
                  if (a.weight < b.weight) return 1;
                  if (b.weight < a.weight) return -1;
                  return 0;
                });
        
                return {
                  ...state,
                  dogs: descweight
                }
              }
              return {
                ...state,
                dogs: allDogs
              };
    case POST_DOG:
        return{
            ...state
        }
        case DETAIL_DELETE:
        return{
          ...state,
          detail: action.payload
      }

            default:
                return state;
    }
}

export default reducer