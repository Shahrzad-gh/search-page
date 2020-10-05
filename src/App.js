import React from 'react';
import './App.css';
import Landing from "./components/Landing"
import {Provider} from "react-redux"
import store from "./store/store"
import SearchContainer from './containers/SearchContainer';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact patch="/SearchResult" component={SearchContainer}/>
      </Router>
    </Provider>
  );
}

export default App;
