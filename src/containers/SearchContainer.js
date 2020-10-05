import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchItem from './SearchItem'

class SearchContainer extends Component{
    
  render(){
      const { searchContents } = this.props

      let pageContent = ""
      pageContent = searchContents !== null 
      ? searchContents.items && searchContents.items.map((item, index) => <SearchItem key={index} search={item}/>) 
       : null ;  
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column mb-5">
            {pageContent}          
        </div>
    )
}
}
const mapStateToProps = state => {
    return{
        searchContents: state.result.searchContents
    }
}

export default connect(mapStateToProps)(SearchContainer)