import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

// Components
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            {/* SideDrawer*/}
            {/* Backdrop */}

            <main>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route
                        exact
                        path="/products/:id"
                        component={ProductScreen}
                    />
                    <Route exact path="/cart" component={CartScreen} />
                </Switch>
            </main>

            {/* HomeScreen */}
            {/* ProductScreen */}
            {/* CartScreen */}
        </Router>
    );
}

export default App;
