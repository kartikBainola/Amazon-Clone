import './App.css';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Home from './componets/Home';
import Header from './componets/Header';
import Login from './componets/Login';
import { useEffect } from 'react';
import { auth } from './connect/firebasedb';
import Checkout from './componets/Checkout';
function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser,dispatch) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
     <Router>
     <Link to="/"></Link>
     <Routes>
     <Route exact path='/' element={<><Header /><Home /></>}></Route>
     <Route exact path='/login' element={<Login/>}></Route>
     <Route exact path='/checkout' element={<Checkout/>}></Route>
     <Route exact path='/checkout' element={<Checkout/>}></Route>
</Routes>
    </Router>
    </div>
  );
}

export default App;
