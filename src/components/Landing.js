import React, { useCallback, useState } from 'react'
import { connect } from "react-redux";
import {searchText, fetchContent} from "../store/actions/searchActions"

function Landing(props) {

  const handleSearch =(e) =>{
        e.preventDefault();
        let page = (e.target.value * 10) - 9
        props.fetchContent(props.search, page);
    }

    const handleChange = (e) =>{
        props.searchText(e.target.value);
        props.fetchContent(props.search, 1);
    }

    const debounce = (func) => {
      let timer;
      return function (...args){
        const context = this;
        if(timer) clearTimeout()
        timer = setTimeout(() =>{
          timer = null
          func.apply(context, args)
        }, 500)
      }
    }
  
    const optimizedSearch = useCallback(debounce(handleChange),[],)

      const {items} = props
      let hide= true;
        items !=null ? hide=false : hide= true
    return (
      <div className="container d-flex justify-content-center align-items-center flex-column p-5">
          <img 
          className="mb-5"
          width="100" 
          heigth="50" src="https://www.flaticon.com/svg/static/icons/svg/281/281764.svg"
          alt="logo"/>

        <div className="input-group mb-3 col-md-6">
          <input 
          type="text" 
          onChange={optimizedSearch} 
          className="form-control" 
          placeholder="Search..."/>

          <div className="input-group-append">
            <button 
            className="btn btn-outline-primary" 
            value={1}
            onClick={handleSearch} 
            type="button" 
            id="button-addon2">
              <i className="fas fa-search"></i> 
            </button>
          </div>
      </div>
      <nav aria-label="Page navigation example">
            <ul className="pagination" hidden={hide}>
                <li className="page-item page-link" value={1} 
                onClick={handleSearch}
                >1</li>
                <li className="page-item page-link" value={2} 
                onClick={handleSearch}
                >2</li>
            </ul>
        </nav>          
      </div>
    
    )
}

const mapStateToprops = (state) => {
    return{
        search : state.result.search,
        items : state.result.searchContents.items
    }
}

export default connect(mapStateToprops, {searchText, fetchContent})(Landing)