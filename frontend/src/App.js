import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {useState} from 'react';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import Navbar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/BackDrop"; 

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)} />
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
