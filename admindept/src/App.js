import Login from "./components/login.js";
import Otpmodal from "./components/otpmodal.js";
import Signup from "./components/signup.js";
import { ChakraProvider } from "@chakra-ui/provider";
import {Route, Routes} from 'react-router-dom'
import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
