import React, { Component } from 'react';
import { BrowserRouter , Route, Link,Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import homePage from './pages/homePage.js';
import history from './pages/history.js';
import addstudent from './pages/addstudent.jsx';
import pairing from './pages/pairing.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        

          <Route name="history" exact path="/history" component={history} />
          <Route name="addstudent" exact path="/addstudent" component={addstudent} />
          <Route name="pairing" exact path="/pairing" component={pairing} />
          <Route name="home" exact path="/" component={homePage} />
        
        </Switch>
        </BrowserRouter>
      
    );
  }
}

export default App;
