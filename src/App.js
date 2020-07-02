import React from 'react';
import './App.css';
import { Switch, Route, Link} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';




function App() {
  return (
    <>
    <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            
          </ul>
      </nav>

    <div className="App">
        
      <Switch>
        <Route exact path='/'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route> 
      </Switch>
      
    </div>

    </>

  );
}


export default App;
