import React from 'react';
import './App.css';
import { Switch, Route, Link, Private-Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';



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
        <PrivateRoute path ='/protected'>

        </PrivateRoute>
      </Switch>
      
    </div>

    </>

  );
}

const PrivateRoute = ({component: Protected, ...rest}) => {
  <Route {...rest} render={props => (
    
  )}
}

export default App;
