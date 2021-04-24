import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute"
import {Login, Dashboard, ErrorPage} from "./pages"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute path={"/"} exact component={Dashboard} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
