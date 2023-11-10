// export const ABI_MY_CONTRACT = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "Approve",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "deposit",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//     ],
//     name: "getBlance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdraw",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawTransferFrom",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
// ];

// // export const ADDRESS_MY_CONTRACT = "0xa6581e0D7BA12f36f883d9D10F3332f1FB9DF15C";
// export const ADDRESS_MY_CONTRACT = "0xfC598F5BBA5c7C7Ba092799BEf9E26d4294d7DE0";

// export const ADDRESS_RINKEBY_CROSSCHAIN =
//   //   // "0xc30e6777D3Bfa606b35D5f0e8dB332e16ca9a3d9";
//   "0x3C7647b36268594e2F489203A6e665F153AA35dE";
// export const ADDRESS_ROPSTEN_CROSSCHAIN =
//   //   // "0x9B0E44326de5795746316C3141428806b2B9eAcc";
//   "0xbc8a697d2b7ba2e446ec65c57d59fd2fada72c61";
// export const ADDRESS_BINANCE_CROSSCHAIN =
//   "0xb02eB79BD8ec3d9759605F00291EbE1cd4E07eea";
// export const ADDRESS_FUJI_CROSSCHAIN =
//   "0xEE2c7fE4a4117D753AC4fb7E951C0D23C1244195";
// export const ABI_CROSSCHAIN = {
//   _format: "hh-sol-artifact-1",
//   contractName: "CrossChain",
//   sourceName: "contracts/CrossChain.sol",
//   abi: [
//     {
//       inputs: [],
//       stateMutability: "nonpayable",
//       type: "constructor",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "address",
//           name: "from",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "address",
//           name: "to",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "Transfer",
//       type: "event",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "token",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "depositERC20",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "depositETH",
//       outputs: [],
//       stateMutability: "payable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getBalanceETH",
//       outputs: [
//         {
//           internalType: "uint256",
//           name: "",
//           type: "uint256",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "owner",
//       outputs: [
//         {
//           internalType: "address",
//           name: "",
//           type: "address",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "token",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "withdrawERC20",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "withdrawETH",
//       outputs: [],
//       stateMutability: "payable",
//       type: "function",
//     },
//   ],
//   bytecode:
//     "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610aea806100606000396000f3fe6080604052600436106100555760003560e01c80638da5cb5b1461005a57806397feb92614610085578063a1db9782146100ae578063acd1f254146100d7578063f14210a614610102578063f6326fb31461011e575b600080fd5b34801561006657600080fd5b5061006f610128565b60405161007c91906107ea565b60405180910390f35b34801561009157600080fd5b506100ac60048036038101906100a79190610689565b61014c565b005b3480156100ba57600080fd5b506100d560048036038101906100d09190610689565b610195565b005b3480156100e357600080fd5b506100ec6101de565b6040516100f991906108e5565b60405180910390f35b61011c600480360381019061011791906106ee565b6101e6565b005b61012661033c565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101568282610379565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef33308360405161018993929190610805565b60405180910390a15050565b61019f82826104d8565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3033836040516101d293929190610805565b60405180910390a15050565b600047905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026b90610885565b60405180910390fd5b804710156102b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ae906108c5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102fd573d6000803e3d6000fd5b507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef30338360405161033193929190610805565b60405180910390a150565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef33303460405161036f93929190610805565b60405180910390a1565b808273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016103b391906107ea565b60206040518083038186803b1580156103cb57600080fd5b505afa1580156103df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104039190610717565b1015610444576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043b90610865565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161048193929190610805565b602060405180830381600087803b15801561049b57600080fd5b505af11580156104af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d391906106c5565b505050565b808273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161051291906107ea565b60206040518083038186803b15801561052a57600080fd5b505afa15801561053e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105629190610717565b10156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a906108a5565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016105de92919061083c565b602060405180830381600087803b1580156105f857600080fd5b505af115801561060c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063091906106c5565b505050565b60008135905061064481610a6f565b92915050565b60008151905061065981610a86565b92915050565b60008135905061066e81610a9d565b92915050565b60008151905061068381610a9d565b92915050565b6000806040838503121561069c57600080fd5b60006106aa85828601610635565b92505060206106bb8582860161065f565b9150509250929050565b6000602082840312156106d757600080fd5b60006106e58482850161064a565b91505092915050565b60006020828403121561070057600080fd5b600061070e8482850161065f565b91505092915050565b60006020828403121561072957600080fd5b600061073784828501610674565b91505092915050565b61074981610911565b82525050565b600061075c602f83610900565b915061076782610959565b604082019050919050565b600061077f603083610900565b915061078a826109a8565b604082019050919050565b60006107a2602f83610900565b91506107ad826109f7565b604082019050919050565b60006107c5602083610900565b91506107d082610a46565b602082019050919050565b6107e48161094f565b82525050565b60006020820190506107ff6000830184610740565b92915050565b600060608201905061081a6000830186610740565b6108276020830185610740565b61083460408301846107db565b949350505050565b60006040820190506108516000830185610740565b61085e60208301846107db565b9392505050565b6000602082019050818103600083015261087e8161074f565b9050919050565b6000602082019050818103600083015261089e81610772565b9050919050565b600060208201905081810360008301526108be81610795565b9050919050565b600060208201905081810360008301526108de816107b8565b9050919050565b60006020820190506108fa60008301846107db565b92915050565b600082825260208201905092915050565b600061091c8261092f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f43726f73732d636861696e206661696c65643a3a205520646f6e27742068617660008201527f6520656e6f756768206d6f6e65792e0000000000000000000000000000000000602082015250565b7f546869732066756e6374696f6e2073686f756c6420626520757365642062792060008201527f636f6e74726163742773206f776e657200000000000000000000000000000000602082015250565b7f43726f73732d636861696e206661696c6564203a3a20436f6e7472616374206e60008201527f6f7420656e6f75676820746f6b656e0000000000000000000000000000000000602082015250565b7f4e6f206d6f72652062616c616e6365206f6e207468697320636f6e7472616374600082015250565b610a7881610911565b8114610a8357600080fd5b50565b610a8f81610923565b8114610a9a57600080fd5b50565b610aa68161094f565b8114610ab157600080fd5b5056fea26469706673582212209e9f8ff99ac365fbc7b91ae7cb7b92088148cf0cbf15829a0fff360fb60ac00164736f6c63430008040033",
//   deployedBytecode:
//     "0x6080604052600436106100555760003560e01c80638da5cb5b1461005a57806397feb92614610085578063a1db9782146100ae578063acd1f254146100d7578063f14210a614610102578063f6326fb31461011e575b600080fd5b34801561006657600080fd5b5061006f610128565b60405161007c91906107ea565b60405180910390f35b34801561009157600080fd5b506100ac60048036038101906100a79190610689565b61014c565b005b3480156100ba57600080fd5b506100d560048036038101906100d09190610689565b610195565b005b3480156100e357600080fd5b506100ec6101de565b6040516100f991906108e5565b60405180910390f35b61011c600480360381019061011791906106ee565b6101e6565b005b61012661033c565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101568282610379565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef33308360405161018993929190610805565b60405180910390a15050565b61019f82826104d8565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3033836040516101d293929190610805565b60405180910390a15050565b600047905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026b90610885565b60405180910390fd5b804710156102b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ae906108c5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102fd573d6000803e3d6000fd5b507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef30338360405161033193929190610805565b60405180910390a150565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef33303460405161036f93929190610805565b60405180910390a1565b808273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016103b391906107ea565b60206040518083038186803b1580156103cb57600080fd5b505afa1580156103df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104039190610717565b1015610444576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043b90610865565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161048193929190610805565b602060405180830381600087803b15801561049b57600080fd5b505af11580156104af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d391906106c5565b505050565b808273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161051291906107ea565b60206040518083038186803b15801561052a57600080fd5b505afa15801561053e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105629190610717565b10156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a906108a5565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016105de92919061083c565b602060405180830381600087803b1580156105f857600080fd5b505af115801561060c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063091906106c5565b505050565b60008135905061064481610a6f565b92915050565b60008151905061065981610a86565b92915050565b60008135905061066e81610a9d565b92915050565b60008151905061068381610a9d565b92915050565b6000806040838503121561069c57600080fd5b60006106aa85828601610635565b92505060206106bb8582860161065f565b9150509250929050565b6000602082840312156106d757600080fd5b60006106e58482850161064a565b91505092915050565b60006020828403121561070057600080fd5b600061070e8482850161065f565b91505092915050565b60006020828403121561072957600080fd5b600061073784828501610674565b91505092915050565b61074981610911565b82525050565b600061075c602f83610900565b915061076782610959565b604082019050919050565b600061077f603083610900565b915061078a826109a8565b604082019050919050565b60006107a2602f83610900565b91506107ad826109f7565b604082019050919050565b60006107c5602083610900565b91506107d082610a46565b602082019050919050565b6107e48161094f565b82525050565b60006020820190506107ff6000830184610740565b92915050565b600060608201905061081a6000830186610740565b6108276020830185610740565b61083460408301846107db565b949350505050565b60006040820190506108516000830185610740565b61085e60208301846107db565b9392505050565b6000602082019050818103600083015261087e8161074f565b9050919050565b6000602082019050818103600083015261089e81610772565b9050919050565b600060208201905081810360008301526108be81610795565b9050919050565b600060208201905081810360008301526108de816107b8565b9050919050565b60006020820190506108fa60008301846107db565b92915050565b600082825260208201905092915050565b600061091c8261092f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f43726f73732d636861696e206661696c65643a3a205520646f6e27742068617660008201527f6520656e6f756768206d6f6e65792e0000000000000000000000000000000000602082015250565b7f546869732066756e6374696f6e2073686f756c6420626520757365642062792060008201527f636f6e74726163742773206f776e657200000000000000000000000000000000602082015250565b7f43726f73732d636861696e206661696c6564203a3a20436f6e7472616374206e60008201527f6f7420656e6f75676820746f6b656e0000000000000000000000000000000000602082015250565b7f4e6f206d6f72652062616c616e6365206f6e207468697320636f6e7472616374600082015250565b610a7881610911565b8114610a8357600080fd5b50565b610a8f81610923565b8114610a9a57600080fd5b50565b610aa68161094f565b8114610ab157600080fd5b5056fea26469706673582212209e9f8ff99ac365fbc7b91ae7cb7b92088148cf0cbf15829a0fff360fb60ac00164736f6c63430008040033",
//   linkReferences: {},
//   deployedLinkReferences: {},
// };

// //------------address new for transfer
// export const ADDRESS_ROPSTEN_CROSSCHAIN_NEW =
//   "0x2858ca31f3659302DB2307E4e7371635F3bbC472"; // chua co mint burn contract
// export const ADDRESS_BSC_CROSSCHAIN_NEW =
//   "0x56D904f15B67D1F9805671130bafBDB479A607d3"; // mint burn luu mongodb
// export const ADDRESS_RINK_CROSSCHAIN_NEW =
//   "0xedEEDf64069Dcd7513097dDCad7239043FfCeCD7"; // mint burn luu mongodb
// export const ADDRESS_AVA_CROSSCHAIN_NEW =
//   "0xedEEDf64069Dcd7513097dDCad7239043FfCeCD7"; // mint burn luu mongodb
// //.......................

// // abi
// export const ABI_TRANSFER = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//     ],
//     name: "GetBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "depositToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawBackup",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

// export const ABI_TRANSFER_BSC = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//     ],
//     name: "GetBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "depositToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawBackup",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

// export const ABI_BEP20 = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//     ],
//     name: "allowance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "approve",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "burn",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "decimals",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "subtractedValue",
//         type: "uint256",
//       },
//     ],
//     name: "decreaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getOwner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "addedValue",
//         type: "uint256",
//       },
//     ],
//     name: "increaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "mint",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalSupply",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "recipient",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transfer",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "sender",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "recipient",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transferFrom",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

// export const ABI_ERC20 = [
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "symbol",
//         type: "string",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//     ],
//     name: "allowance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "approve",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "burn",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "decimals",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "subtractedValue",
//         type: "uint256",
//       },
//     ],
//     name: "decreaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getOwner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "addedValue",
//         type: "uint256",
//       },
//     ],
//     name: "increaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "mint",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalSupply",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "recipient",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transfer",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "sender",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "recipient",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transferFrom",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

// export const ABI_MINT_BURN = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "BurnToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "BurnToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "MintToken",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "token",
//         type: "address",
//       },
//     ],
//     name: "TransferOwner",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];
