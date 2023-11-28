/* eslint-disable react-hooks/exhaustive-deps */
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Avatar,
} from "@chakra-ui/react";
import { Kbd } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  SLEEPY_ABI,
  SLEEPY_ADDRESSDUA,
  SLEEPY_ADDRESSTIGA,
  SLEEPY_ADDRESSEMPAT,
} from "../abis/SLEEPY_TOKEN";
import styled from "styled-components";
// import logo from '../logo.png';
import "./Wallet.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import ItemAsset from "./AssetItem/ItemAsset";
const Wallet = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();

  const [balanceSleep, setBalanceSleep] = useState();
  const [balanceSleepp, setBalanceSleepp] = useState();
  const [balanceSleeppp, setBalanceSleeppp] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let acc = await web3.eth.getAccounts();
      if (acc.length === 0) acc = await web3.eth.requestAccounts();
      setAccount(acc[0]);
      const bal = await web3.eth.getBalance(acc[0]);
      setBalance(web3.utils.fromWei(bal, "ether"));
      // axios.get(`http://localhost:3000/users/`).then((rep) => console.log(rep.data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const token = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESSDUA);
      // console.log(token);
      const balSleep = await token.methods.balanceOf(account).call();
      setBalanceSleep(web3.utils.fromWei(balSleep, "ether"));
    })();
  }, [account, web3]);

  useEffect(() => {
    (async () => {
      const token = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESSTIGA);
      // console.log(token);
      const balSleepp = await token.methods.balanceOf(account).call();
      setBalanceSleepp(web3.utils.fromWei(balSleepp, "ether"));
    })();
  }, [account, web3]);
  useEffect(() => {
    (async () => {
      const token = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESSEMPAT);
      // console.log(token);
      const balSleeppp = await token.methods.balanceOf(account).call();
      setBalanceSleeppp(web3.utils.fromWei(balSleeppp, "ether"));
    })();
  }, [account, web3]);

  // const SwitchBalance = async () => {
  //   isETH ? setIsETH(false) : setIsETH(true);
  //   if (isETH) {
  //     const bal = await web3.eth.getBalance(account);
  //     setBalance(bal);
  //   } else {
  //     const token = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESS);
  //     // console.log(token);
  //     const balance = await token.methods.balanceOf(account).call();
  //     // console.log(balance);
  //     setBalance(balance);
  //   }
  // };

  return (
    <Background>
      <MainCard>
        <MenuBar>
          <AddressZone>
            <Kbd>Your Wallet</Kbd>
            <Kbd>{account}</Kbd>
          </AddressZone>
        </MenuBar>

        <AssetBar>
          <Tabs sx={{ color: `#fffff`, fontWeight: `700` }}>
            <TabList sx={{ color: `#fffff`, fontWeight: `700` }} mb="1em">
              <Tab sx={{ color: `#fffff`, fontWeight: `700` }}>Assets</Tab>
              <Tab sx={{ color: `#fffff`, fontWeight: `700` }}>Stable</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div onClick={() => navigate(`/transfer/ether`)}>
                  <ItemAsset
                    balance={balance}
                    name={`Polygon`}
                    symbol={`MATIC`}
                  />
                </div>
                <div onClick={() => navigate(`/transfer/${SLEEPY_ADDRESSDUA}`)}>
                  <ItemAsset
                    balance={balanceSleep}
                    name={`Zerogic`}
                    symbol={`ZGC`}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  onClick={() => navigate(`/transfer/${SLEEPY_ADDRESSTIGA}`)}
                >
                  <ItemAsset
                    balance={balanceSleepp}
                    name={`Rupiah-C`}
                    symbol={`IDRC`}
                  />
                </div>
                <div
                  onClick={() => navigate(`/transfer/${SLEEPY_ADDRESSEMPAT}`)}
                >
                  <ItemAsset
                    balance={balanceSleeppp}
                    name={`Usdt`}
                    symbol={`USDT`}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </AssetBar>
      </MainCard>
    </Background>
  );
};

const Background = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const MainCard = styled.div`
  width: 100%;
  background-color: #0000;
  margin-top: 5%;
  border-radius: 4px;
  align-items: center;
`;

const MenuBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const AddressZone = styled.div`
  width: 100%;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  margin: 0px 0 0 0;
  color: black;
  align-items: center;
`;

const HomeBar = styled.div`
  margin: 70px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const AssetBar = styled.div`
  padding: 0;
  margin: 100px 0 0 0;
`;

const BalanceZonee = styled.div`
  border-radius: 5px;
  text-align: center;
  font-size: 80%;
  font-weight: 550;
  & ::-moz-selection {
    /* Css Untuk Browser Firefox */
    background-color: #c6538a;
    color: #ffffff;
  }

  ::selection {
    background-color: #c6538a;
    color: #ffffff;
  }
`;
const BalanceZone = styled.div`
  border-radius: 5px;
  text-align: center;
  margin: 5px 0px;
`;

const Divider = styled.hr`
  margin-top: 5px;
`;

const ActionZone = styled.div`
  width: 100%;
  text-align: center;
  margin: 15px 0px;
`;

const Button = styled.button`
  margin: 0px 25px;
  color: #a20000;
`;

const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #a20000;
  border-radius: 20px;
  margin-top: 6px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export default Wallet;
