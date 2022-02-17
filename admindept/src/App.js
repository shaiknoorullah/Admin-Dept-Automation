import Login from "./components/login.js";
import Otpmodal from "./components/otpmodal.js";
import Signup from "./components/signup.js";
import { ChakraProvider } from "@chakra-ui/provider";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from "./components/dashboard.js";
import {useAuthContext} from './hooks/useAuthContext'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <ChakraProvider>
      {/* <Login/> */}
      { authIsReady &&  (
        <Router>
          <Switch>
            <Route exact path="/">
              {!user&& <Login/> }
              {user&& <Dashboard/> }
            </Route>
            <Route exact path="/signup">
              {!user&& <Signup/> }
              {user&& <Login/> }
            </Route>
            <Route exact path="/dashboard">
              {!user&& <Redirect to='/'/> }
              {user&& <Dashboard/> }
            </Route>
            
          </Switch>
        </Router>
      )}
    </ChakraProvider>
  );
}

export default App;
