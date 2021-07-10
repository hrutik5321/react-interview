// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "./actions";
import "./App.css";
import Home from "./Pages/Home/Home";
import SupplierMaintenance from "./Pages/SupplierMaintenance/SupplierMaintenance";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PurchaseManagement from "./Pages/PurchaseManagement/PurchaseManagement";
import InputMaintenance from "./Pages/InputMaintenance/InputMaintenance";
import Product from "./components/Product/Product";

const App = () => {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/supplier">
          <SupplierMaintenance />
        </Route>
        <Route exact path="/purchase">
          <PurchaseManagement />
        </Route>
        <Route exact path="/input">
          <InputMaintenance />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   {/* <h1>Counter {counter}</h1>
    //   <button onClick={() => dispatch(increment(5))}>+</button>
    //   <button>-</button>
    //   {isLogged ? <h3>Valuable Information I should't see</h3> : ""} */}

    // </div>
  );
};

export default App;
