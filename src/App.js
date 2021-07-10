import "./App.css";
import Home from "./Pages/Home/Home";
import SupplierMaintenance from "./Pages/SupplierMaintenance/SupplierMaintenance";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PurchaseManagement from "./Pages/PurchaseManagement/PurchaseManagement";
import InputMaintenance from "./Pages/InputMaintenance/InputMaintenance";
import Product from "./components/Product/Product";
import TaxMaster from "./Pages/TaxBar/TaxtMaster";

const App = () => {
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
        <Route>
          <TaxMaster />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
