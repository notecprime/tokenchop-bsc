/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockBandProtocol } from "../MockBandProtocol";

export class MockBandProtocol__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockBandProtocol> {
    return super.deploy(overrides || {}) as Promise<MockBandProtocol>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockBandProtocol {
    return super.attach(address) as MockBandProtocol;
  }
  connect(signer: Signer): MockBandProtocol__factory {
    return super.connect(signer) as MockBandProtocol__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBandProtocol {
    return new Contract(address, _abi, signerOrProvider) as MockBandProtocol;
  }
}

const _abi = [
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "getReferenceData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct MockBandProtocol.ReferenceData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061037f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806365555bcc1461004657806391b7f5ed14610076578063a035b1fe14610092575b600080fd5b610060600480360381019061005b919061018b565b6100b0565b60405161006d9190610280565b60405180910390f35b610090600480360381019061008b91906101f7565b6100dd565b005b61009a6100e7565b6040516100a7919061029b565b60405180910390f35b6100b86100ed565b6040518060600160405280600054815260200142815260200142815250905092915050565b8060008190555050565b60005481565b60405180606001604052806000815260200160008152602001600081525090565b600061012161011c846102e7565b6102b6565b90508281526020810184848401111561013957600080fd5b610144848285610321565b509392505050565b600082601f83011261015d57600080fd5b813561016d84826020860161010e565b91505092915050565b60008135905061018581610332565b92915050565b6000806040838503121561019e57600080fd5b600083013567ffffffffffffffff8111156101b857600080fd5b6101c48582860161014c565b925050602083013567ffffffffffffffff8111156101e157600080fd5b6101ed8582860161014c565b9150509250929050565b60006020828403121561020957600080fd5b600061021784828501610176565b91505092915050565b6060820160008201516102366000850182610262565b5060208201516102496020850182610262565b50604082015161025c6040850182610262565b50505050565b61026b81610317565b82525050565b61027a81610317565b82525050565b60006060820190506102956000830184610220565b92915050565b60006020820190506102b06000830184610271565b92915050565b6000604051905081810181811067ffffffffffffffff821117156102dd576102dc610330565b5b8060405250919050565b600067ffffffffffffffff82111561030257610301610330565b5b601f19601f8301169050602081019050919050565b6000819050919050565b82818337600083830152505050565bfe5b61033b81610317565b811461034657600080fd5b5056fea2646970667358221220f2a5a2d3adb1e77c4a83d781ccd9f1a197c0581dfb74047f7dc1fff5c97ad82164736f6c63430007060033";
