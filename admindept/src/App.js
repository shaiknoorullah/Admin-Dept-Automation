import Login from "./components/login.js";
import Otpmodal from "./components/otpmodal.js";
import Signup from "./components/signup.js";
import { ChakraProvider } from "@chakra-ui/provider";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
