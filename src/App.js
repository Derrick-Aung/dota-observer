import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import './App.css';
import ProMatches from './components/ProMatches';
import ProMatchDetail from './components/ProMatchDetail'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/pro-matches">
                <ProMatches />
              </Route>
              <Route path="/pro-matches/:match_id" component={ProMatchDetail}/>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
