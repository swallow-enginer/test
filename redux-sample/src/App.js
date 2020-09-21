import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux'
import reducer from './redux/reducer'
import { Provider } from 'react-redux';

//screens
import click from './redux/click-con';
import show from './redux/show-con';

// ストアの作成
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* ストアーの引き渡し */}
        <Provider store={store}>
          <Switch>
              <Route exact path="/click" component={click} />
              <Route exact path="/show" component={show} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;