import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import Navbar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/BackDrop"; 

function App() {
  return (
    <Router>
      <Navbar/>
     <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
