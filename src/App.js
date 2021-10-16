import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import MealDetails from './Pages/MealDetail/MealDetails';
import AuthProvider from './Context/AuthProvider';
import CheckOut from './Pages/CheckOut/CheckOut';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/checkout/:price'>
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route exact path='/meal/:mealId'>
              <MealDetails></MealDetails>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
