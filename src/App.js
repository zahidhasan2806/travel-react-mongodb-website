import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Placeorder from './Pages/PlaceOrder/Placeorder';
import SignUp from './Pages/SignUp/SignUp';
import MyPackages from './Pages/MyPackage/MyPackages';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddPackage from './Pages/AddPackage/AddPackage';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/signup" >
              <SignUp></SignUp>
            </Route>
            <Route path="/mypackages" >
              <MyPackages></MyPackages>
            </Route>
            <Route path="/allPackages" >
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/addpackage" >
              <AddPackage></AddPackage>
            </Route>
            <PrivateRoute path="/packages/:id" >
              <Placeorder></Placeorder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
