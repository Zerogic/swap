/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  SLEEPY_ABI2,
  SLEEPY_ADDRESS,
  SLEEPY_ADDRESSEMPAT,
} from "../../abis/SLEEPY_TOKEN";
import styled from "styled-components";

// import logo from '../logo.png';
import Web3 from "web3";
import { useEffect, useState } from "react";
import { Kbd } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TransferAsset = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [account, setAccount] = useState();
  // const [balance, setBalance] = useState();
  const { token } = useParams();

  useEffect(() => {
    (async () => {
      let acc = await web3.eth.getAccounts();
      if (acc.length === 0) acc = await web3.eth.requestAccounts();
      setAccount(acc[0]);
      // const bal = await web3.eth.getBalance(acc[0]);
      // setBalance(web3.utils.fromWei(bal, "ether"));
    })();
  }, []);

  const handleSendButton = async () => {
    if (token === "MATIC") {
      await web3.eth.sendTransaction({
        from: account,
        to: document.getElementsByClassName("send")[0].value,
        value: document.getElementsByClassName("send")[1].value * 10 ** 18,
      });
    } else {
      const address =
        document.getElementsByClassName("send")[0].value +
        "0x0c9c219316386e5a342491cca7fac50bcd87ac09";
      const amount =
        document.getElementsByClassName("send")[1].value + "000000";
      const contract = new web3.eth.Contract(SLEEPY_ABI2, SLEEPY_ADDRESSEMPAT);
      console.log("token contract", contract);
      await contract.methods
        .transfer(address, amount)
        .send({ from: account })
        .then((rep) => console.log(rep));
    }
  };

  return (
    <Background>
      <MainCard>
        <Container>
          <span>
            <Kbd>1 Usdt</Kbd> <Kbd>=</Kbd> <Kbd>1 zerogic</Kbd>
          </span>
          <InputGroup sx={{ maxWidth: "80%", padding: "20px 0px" }}>
            <InputLeftAddon children="0x...."></InputLeftAddon>
            <Input
              sx={{ display: none, color: "#ffffff" }}
              placeholder="Paste Swap Address"
              className="send"
            />
          </InputGroup>
          <InputGroup sx={{ maxWidth: "80%", padding: "20px 0px" }}>
            <InputLeftAddon children="$(USDT)"></InputLeftAddon>
            <Input
              sx={{ color: "#ffffff" }}
              placeholder="Amount"
              className="send"
            />
          </InputGroup>
          <Button
            sx={{ color: "#ffffff" }}
            leftIcon={<ArrowForwardIcon />}
            colorScheme="red"
            variant={`solid`}
            onClick={handleSendButton}
          >
            Swap
          </Button>
        </Container>
      </MainCard>
    </Background>
  );
};

const Background = styled.div`
  background-color: #000;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Text = styled.div`
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const MainCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  margin-top: 20%;
  margin-bottom: 80%;
  border-radius: 4px;
  align-items: center;
  color: #00000;
`;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
`;

export default TransferAsset;
