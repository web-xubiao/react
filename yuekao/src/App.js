import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Main from './views/main/index';
import Login from './views/login/index';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/main"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
