import Login from "./components/login.js";
import Otpmodal from "./components/otpmodal.js";
import Signup from "./components/signup.js";
import { ChakraProvider } from "@chakra-ui/provider";
function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
