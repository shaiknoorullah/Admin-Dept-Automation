import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Otpmodal from "./components/otpmodal";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Signup />
    </ChakraProvider>
  );
}

export default App;
