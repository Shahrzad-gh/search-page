import { SEARCH_TEXT, FETCH_SEARCH_CONTENT } from "./Types"
import axios from 'axios';
import {APIKEY} from "../../APIKEY"

export const searchText = text => dispatch =>{
  dispatch ({
      type: SEARCH_TEXT,
      payload: text
  })
}

export const fetchContent = (text,page) => async (dispatch) => {
  await axios.get(`https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=017576662512468239146:omuauf_lfve&q=${text}&start=${page}`)
          .then(response => dispatch ({
              type: FETCH_SEARCH_CONTENT,
              payload: response.data
          }))
          .catch(err => console.log(err));            
}

