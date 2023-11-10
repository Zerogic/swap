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
        <GridItem
          sx={{ alignContent: "center", color: "#ffffff" }}
          colStart={1}
          colEnd={4}
        >
          <Avatar size={`sm`} sx={{ marginLeft: `0px` }} name={name} />
          <Text
            as="kbd"
            fontSize="13px"
            sx={{ margin: `2px 15px`, fontWeight: `530`, color: "#ffffff" }}
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
`;

// const ItemIcon = styled.div`
//   font-size: 35px;
//   color: #b4b8bc;
// `;

export default ItemAsset;
