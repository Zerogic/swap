/* eslint-disable react-hooks/exhaustive-deps */
import { Text, Grid, Avatar, GridItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import styled from "styled-components";
// import logo from '../logo.png';

const ItemAsset = (props) => {
  const { balance, name, symbol } = props;
  return (
    <AssetItem>
      <Grid>
        <GridItem sx={{ alignContent: "center" }} colStart={1} colEnd={4}>
          <Avatar size={`sm`} sx={{ marginLeft: `0px` }} name={name} />
          <Text
            as="kbd"
            fontSize="15px"
            sx={{ margin: `2px 15px`, fontWeight: `550` }}
          >
            {balance} {symbol}
          </Text>
        </GridItem>
        <GridItem colStart={6} colEnd={6}></GridItem>
      </Grid>
    </AssetItem>
  );
};

const AssetItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #b4b8bc;
  padding: 10px 0px;
  transition: 0.5s;
  &:hover {
    background-color: #e6e4e4;
    cursor: pointer;
  }
`;

// const ItemIcon = styled.div`
//   font-size: 35px;
//   color: #b4b8bc;
// `;

export default ItemAsset;
