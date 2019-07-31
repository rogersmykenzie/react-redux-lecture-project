import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Shows from './components/Shows';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          <Switch>
            <Route path='/shows' component={Shows} />
            <Route path='/' component={Login} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
