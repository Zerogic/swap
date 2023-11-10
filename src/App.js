import { Button, ChakraProvider } from "@chakra-ui/react";
// import logo from '../logo.png';
import "./App.css";
import Wallet from "./components/Wallet";
import TransferAsset from "./components/Transfer/TransferAsset";

const App = () => {
  return (
    <ChakraProvider>
      <Wallet />
      <TransferAsset />
    </ChakraProvider>
  );
};

export default App;
