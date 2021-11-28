import React, { Component } from 'react';
import Main from './Component/ContainerComponent';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from './redux/configurestore';


class App extends Component {

  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
  }

export default App;
