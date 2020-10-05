import { SEARCH_TEXT, FETCH_SEARCH_CONTENT } from "../actions/Types"

const initialState = {
    search : "",
    searchContents: [],
    //contet:[]

}
export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_TEXT : 
          return{
            ...state,
            search: action.payload
          }
        case  FETCH_SEARCH_CONTENT : 
          return{
            ...state,
            searchContents: action.payload
          }
        
        default:
          return state
    }
}