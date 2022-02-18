import Login from "./components/login.js";
import Signup from "./components/signup.js";
import { ChakraProvider } from "@chakra-ui/provider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/dashboard.js";
import { useAuthContext } from "./hooks/useAuthContext";
import QueryModal from "./components/queryModal.js";

function App() {
  const { authIsReady, user, mobile } = useAuthContext();

  return (
    <ChakraProvider>
      {/* <Login/> */}
      {/* using authIsReady and user from useAuthContext()
      to route the users to dashboard if logged in */}
      {authIsReady && (
        <Router>
          <Switch>
            <Route exact path="/">
              {!user && <Login />}
              {user && <Dashboard user={user} />}
            </Route>
            <Route exact path="/signup">
              {!user && <Signup />}
              {user && <Dashboard />}
            </Route>
            <Route exact path="/dashboard">
              {!user && <Redirect to="/" />}
              {user && <Dashboard />}
            </Route>
            <Route exact path="/querymodal">
              {!user && <Redirect to="/" />}
              {user && <QueryModal />}
            </Route>
          </Switch>
        </Router>
      )}
    </ChakraProvider>
  );
}

export default App;
