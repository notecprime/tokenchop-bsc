/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenChopSpecFactory } from "../TokenChopSpecFactory";

export class TokenChopSpecFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    overrides?: Overrides
  ): Promise<TokenChopSpecFactory> {
    return super.deploy(
      _factory,
      overrides || {}
    ) as Promise<TokenChopSpecFactory>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): TokenChopSpecFactory {
    return super.attach(address) as TokenChopSpecFactory;
  }
  connect(signer: Signer): TokenChopSpecFactory__factory {
    return super.connect(signer) as TokenChopSpecFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenChopSpecFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenChopSpecFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_base",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quote",
        type: "address",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "spec",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_base",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quote",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spec",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stable",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516138213803806138218339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061378d806100946000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063c45a015514610046578063e34336151461007a578063f8c8765e14610108575b600080fd5b61004e6101ac565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100dc6004803603604081101561009057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101d0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101aa6004803603608081101561011e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610362565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610294576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e43686f703a20464f5242494444454e00000000000000000000000081525060200191505060405180910390fd5b600080604051806020016102a7906104e6565b6020820181038252601f19601f8201166040525090506000858560405160200180807f53706563000000000000000000000000000000000000000000000000000000008152506004018373ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f5925082935050505092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610423576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e43686f703a20464f5242494444454e00000000000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663c0c53b8b8585846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156104c857600080fd5b505af11580156104dc573d6000803e3d6000fd5b5050505050505050565b613264806104f48339019056fe608060405234801561001057600080fd5b5033600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613203806100616000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806395d89b41116100de578063c0c53b8b11610097578063d8dfeb4511610071578063d8dfeb4514610458578063dd62ed3e14610476578063f33ab2b8146104a6578063f8ac93e8146104d657610173565b8063c0c53b8b146103ee578063c45a01551461040a578063cd0b4aed1461042857610173565b806395d89b4114610328578063999b93af14610346578063a035b1fe14610364578063a9059cbb14610382578063a9ed003d146103b2578063b1dd61b6146103d057610173565b80635001f3b5116101305780635001f3b51461026257806360d6df6e1461028057806370a082311461029e57806380583be7146102ce578063893d20e8146102ec5780638f940f631461030a57610173565b806306fdde0314610178578063095ea7b31461019657806318160ddd146101c657806323b872dd146101e4578063313ce5671461021457806342966c6814610232575b600080fd5b6101806104e0565b60405161018d9190612e88565b60405180910390f35b6101b060048036038101906101ab91906127cf565b61057e565b6040516101bd9190612e6d565b60405180910390f35b6101ce610595565b6040516101db9190612fea565b60405180910390f35b6101fe60048036038101906101f99190612780565b61059b565b60405161020b9190612e6d565b60405180910390f35b61021c6106fb565b6040516102299190613005565b60405180910390f35b61024c60048036038101906102479190612875565b610704565b6040516102599190612e6d565b60405180910390f35b61026a6109fa565b6040516102779190612df2565b60405180910390f35b610288610a20565b6040516102959190612e88565b60405180910390f35b6102b860048036038101906102b391906126cc565b610abe565b6040516102c59190612fea565b60405180910390f35b6102d6610ad6565b6040516102e39190612e88565b60405180910390f35b6102f4610b74565b6040516103019190612df2565b60405180910390f35b610312610b9e565b60405161031f9190613005565b60405180910390f35b610330610ba3565b60405161033d9190612e88565b60405180910390f35b61034e610c41565b60405161035b9190612df2565b60405180910390f35b61036c610c67565b6040516103799190612fea565b60405180910390f35b61039c600480360381019061039791906127cf565b610d46565b6040516103a99190612e6d565b60405180910390f35b6103ba610d5d565b6040516103c79190612df2565b60405180910390f35b6103d8610d83565b6040516103e59190612e88565b60405180910390f35b61040860048036038101906104039190612731565b610dbc565b005b6104126111da565b60405161041f9190612df2565b60405180910390f35b610442600480360381019061043d9190612875565b611200565b60405161044f9190612e6d565b60405180910390f35b610460611552565b60405161046d9190612fea565b60405180910390f35b610490600480360381019061048b91906126f5565b611604565b60405161049d9190612fea565b60405180910390f35b6104c060048036038101906104bb9190612875565b611629565b6040516104cd9190612fea565b60405180910390f35b6104de61185d565b005b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105765780601f1061054b57610100808354040283529160200191610576565b820191906000526020600020905b81548152906001019060200180831161055957829003601f168201915b505050505081565b600061058b338484611867565b6001905092915050565b600d5481565b60006105a8848484611a32565b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610667576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065e90612f2a565b60405180910390fd5b6106f0843384600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403611867565b600190509392505050565b60006012905090565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077e90612f4a565b60405180910390fd5b6107d8826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d2c90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610822611d4c565b60006108db600d54600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108859190612df2565b60206040518083038186803b15801561089d57600080fd5b505afa1580156108b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d5919061289e565b85611e76565b90506108f283600d54611d2c90919063ffffffff16565b600d81905550610925600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383611f02565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516109839190612fea565b60405180910390a33373ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167f14395d6fb6ac3870af345d12d989b966ccf04dcdd9e02b95722d12dca39eb4b0836040516109e89190612fea565b60405180910390a36001915050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ab65780601f10610a8b57610100808354040283529160200191610ab6565b820191906000526020600020905b815481529060010190602001808311610a9957829003601f168201915b505050505081565b60006020528060005260406000206000915090505481565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b6c5780601f10610b4157610100808354040283529160200191610b6c565b820191906000526020600020905b815481529060010190602001808311610b4f57829003601f168201915b505050505081565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600181565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c395780601f10610c0e57610100808354040283529160200191610c39565b820191906000526020600020905b815481529060010190602001808311610c1c57829003601f168201915b505050505081565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610cc59190612df2565b60206040518083038186803b158015610cdd57600080fd5b505afa158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d15919061289e565b90506000811415610d2a576000915050610d43565b610d3f600d54670de0b6b3a76400008361208c565b9150505b90565b6000610d53338484611a32565b6001905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060400160405280600481526020017f537065630000000000000000000000000000000000000000000000000000000081525081565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4390612faa565b60405180910390fd5b82600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610f7757600080fd5b505afa158015610f8b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fb49190612834565b60069080519060200190610fc9929190612565565b50600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561103257600080fd5b505afa158015611046573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061106f9190612834565b60079080519060200190611084929190612565565b506040518060400160405280600b81526020017f546f6b656e43686f703a2000000000000000000000000000000000000000000081525060066040518060400160405280600181526020017f2f0000000000000000000000000000000000000000000000000000000000000081525060076040518060400160405280600581526020017f205370656300000000000000000000000000000000000000000000000000000081525060405160200161113f959493929190612d76565b60405160208183030381529060405260049080519060200190611163929190612565565b50600660076040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040516020016111b093929190612dc1565b604051602081830303815290604052600590805190602001906111d4929190612565565b50505050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061120a611d4c565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016112679190612df2565b60206040518083038186803b15801561127f57600080fd5b505afa158015611293573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b7919061289e565b90506000808214806112cb57506000600d54145b156113875760005b60035481101561136b576000600282815481106112ec57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505080806001019150506112d3565b506000600d81905550611380600a54856121c8565b9050611397565b611394600d5483866121e5565b90505b6113c5600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333087612271565b611416816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123e190919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061146133612400565b61147681600d546123e190919063ffffffff16565b600d819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114da9190612fea565b60405180910390a33073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f14395d6fb6ac3870af345d12d989b966ccf04dcdd9e02b95722d12dca39eb4b08660405161153f9190612fea565b60405180910390a3600192505050919050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016115af9190612df2565b60206040518083038186803b1580156115c757600080fd5b505afa1580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff919061289e565b905090565b6001602052816000526040600020602052806000526040600020600091509150505481565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b290612faa565b60405180910390fd5b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016117189190612df2565b60206040518083038186803b15801561173057600080fd5b505afa158015611744573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611768919061289e565b90506000838210611779578361177b565b815b90506117cc600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683611f02565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167f14395d6fb6ac3870af345d12d989b966ccf04dcdd9e02b95722d12dca39eb4b08360405161184b9190612fea565b60405180910390a38092505050919050565b611865611d4c565b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156118d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ce90612eca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611947576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193e90612fca565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051611a259190612fea565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611aa2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9990612eaa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0990612f8a565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611b93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8a90612f6a565b60405180910390fd5b611be4816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d2c90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611c77816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546123e190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611cc282612400565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611d1f9190612fea565b60405180910390a3505050565b600082821115611d3b57600080fd5b600082840390508091505092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8ac93e86040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611db657600080fd5b505af1158015611dca573d6000803e3d6000fd5b50505050600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a035b1fe6040518163ffffffff1660e01b815260040160206040518083038186803b158015611e3657600080fd5b505afa158015611e4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e6e919061289e565b600a81905550565b600080841415611eee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f737570706c79416d6f756e74206d757374206e6f74206265203000000000000081525060200191505060405180910390fd5b611ef982848661208c565b90509392505050565b6000808473ffffffffffffffffffffffffffffffffffffffff166040518060400160405280601981526020017f7472616e7366657228616464726573732c75696e743235362900000000000000815250805190602001208585604051602401611f6c929190612e44565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051611fd69190612d5f565b6000604051808303816000865af19150503d8060008114612013576040519150601f19603f3d011682016040523d82523d6000602084013e612018565b606091505b50915091508180156120465750600081511480612045575080806020019051810190612044919061280b565b5b5b612085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161207c90612f0a565b60405180910390fd5b5050505050565b60007001000000000000000000000000000000008410612114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f56616c756520746f6f206c61726765000000000000000000000000000000000081525060200191505060405180910390fd5b700100000000000000000000000000000000831061219a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4e756d657261746f7220746f6f206c617267652000000000000000000000000081525060200191505060405180910390fd5b6121bf826121b1858761250590919063ffffffff16565b61253f90919063ffffffff16565b90509392505050565b60006121dd8284670de0b6b3a764000061208c565b905092915050565b60008083141561225d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f746f74616c436f6c6c61746572616c206d757374206e6f74206265203000000081525060200191505060405180910390fd5b61226882858561208c565b90509392505050565b6000808573ffffffffffffffffffffffffffffffffffffffff166040518060600160405280602581526020016131a960259139805190602001208686866040516024016122c093929190612e0d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161232a9190612d5f565b6000604051808303816000865af19150503d8060008114612367576040519150601f19603f3d011682016040523d82523d6000602084013e61236c565b606091505b509150915081801561239a5750600081511480612399575080806020019051810190612398919061280b565b5b5b6123d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123d090612eea565b60405180910390fd5b505050505050565b6000808284019050838110156123f657600080fd5b8091505092915050565b60005b60035481101561248b578173ffffffffffffffffffffffffffffffffffffffff166002828154811061243157fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561247e5750612502565b8080600101915050612403565b506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506003600081548092919060010191905055505b50565b6000808314156125185760009050612539565b600082840290508284828161252957fe5b041461253457600080fd5b809150505b92915050565b600080821161254d57600080fd5b600082848161255857fe5b0490508091505092915050565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261259b57600085556125e2565b82601f106125b457805160ff19168380011785556125e2565b828001600101855582156125e2579182015b828111156125e15782518255916020019190600101906125c6565b5b5090506125ef91906125f3565b5090565b5b8082111561260c5760008160009055506001016125f4565b5090565b600061262361261e84613051565b613020565b90508281526020810184848401111561263b57600080fd5b61264684828561311d565b509392505050565b60008135905061265d81613163565b92915050565b6000815190506126728161317a565b92915050565b600082601f83011261268957600080fd5b8151612699848260208601612610565b91505092915050565b6000813590506126b181613191565b92915050565b6000815190506126c681613191565b92915050565b6000602082840312156126de57600080fd5b60006126ec8482850161264e565b91505092915050565b6000806040838503121561270857600080fd5b60006127168582860161264e565b92505060206127278582860161264e565b9150509250929050565b60008060006060848603121561274657600080fd5b60006127548682870161264e565b93505060206127658682870161264e565b92505060406127768682870161264e565b9150509250925092565b60008060006060848603121561279557600080fd5b60006127a38682870161264e565b93505060206127b48682870161264e565b92505060406127c5868287016126a2565b9150509250925092565b600080604083850312156127e257600080fd5b60006127f08582860161264e565b9250506020612801858286016126a2565b9150509250929050565b60006020828403121561281d57600080fd5b600061282b84828501612663565b91505092915050565b60006020828403121561284657600080fd5b600082015167ffffffffffffffff81111561286057600080fd5b61286c84828501612678565b91505092915050565b60006020828403121561288757600080fd5b6000612895848285016126a2565b91505092915050565b6000602082840312156128b057600080fd5b60006128be848285016126b7565b91505092915050565b6128d0816130c8565b82525050565b6128df816130da565b82525050565b60006128f082613096565b6128fa81856130ac565b935061290a81856020860161311d565b80840191505092915050565b60008154600181166000811461293357600181146129585761299c565b607f600283041661294481876130ac565b955060ff198316865280860193505061299c565b6002820461296681876130ac565b955061297185613081565b60005b8281101561299357815481890152600182019150602081019050612974565b82880195505050505b505092915050565b60006129af826130a1565b6129b981856130b7565b93506129c981856020860161311d565b6129d281613152565b840191505092915050565b60006129ea6025836130b7565b91507f42455032303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612a506024836130b7565b91507f42455032303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612ab6601f836130b7565b91507f546f6b656e43686f703a205452414e534645525f46524f4d5f4641494c4544006000830152602082019050919050565b6000612af6601a836130b7565b91507f546f6b656e43686f703a205452414e534645525f4641494c45440000000000006000830152602082019050919050565b6000612b366028836130b7565b91507f42455032303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612b9c6011836130b7565b91507f62616420737570706c7920616d6f756e740000000000000000000000000000006000830152602082019050919050565b6000612bdc6026836130b7565b91507f42455032303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612c426023836130b7565b91507f42455032303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612ca86014836130b7565b91507f546f6b656e43686f703a20464f5242494444454e0000000000000000000000006000830152602082019050919050565b6000612ce86022836130b7565b91507f42455032303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b612d4a81613106565b82525050565b612d5981613110565b82525050565b6000612d6b82846128e5565b915081905092915050565b6000612d8282886128e5565b9150612d8e8287612916565b9150612d9a82866128e5565b9150612da68285612916565b9150612db282846128e5565b91508190509695505050505050565b6000612dcd8286612916565b9150612dd98285612916565b9150612de582846128e5565b9150819050949350505050565b6000602082019050612e0760008301846128c7565b92915050565b6000606082019050612e2260008301866128c7565b612e2f60208301856128c7565b612e3c6040830184612d41565b949350505050565b6000604082019050612e5960008301856128c7565b612e666020830184612d41565b9392505050565b6000602082019050612e8260008301846128d6565b92915050565b60006020820190508181036000830152612ea281846129a4565b905092915050565b60006020820190508181036000830152612ec3816129dd565b9050919050565b60006020820190508181036000830152612ee381612a43565b9050919050565b60006020820190508181036000830152612f0381612aa9565b9050919050565b60006020820190508181036000830152612f2381612ae9565b9050919050565b60006020820190508181036000830152612f4381612b29565b9050919050565b60006020820190508181036000830152612f6381612b8f565b9050919050565b60006020820190508181036000830152612f8381612bcf565b9050919050565b60006020820190508181036000830152612fa381612c35565b9050919050565b60006020820190508181036000830152612fc381612c9b565b9050919050565b60006020820190508181036000830152612fe381612cdb565b9050919050565b6000602082019050612fff6000830184612d41565b92915050565b600060208201905061301a6000830184612d50565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561304757613046613150565b5b8060405250919050565b600067ffffffffffffffff82111561306c5761306b613150565b5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006130d3826130e6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561313b578082015181840152602081019050613120565b8381111561314a576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b61316c816130c8565b811461317757600080fd5b50565b613183816130da565b811461318e57600080fd5b50565b61319a81613106565b81146131a557600080fd5b5056fe7472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629a26469706673582212203dfe8bf660f74d50389a8837ce297f9b60be8876b7be75e9368373978b83450364736f6c63430007060033a2646970667358221220349602cc90f5ecd9ca9a6e1b28a2297e353d9cb15b6e1eaac26bd920bef741be64736f6c63430007060033";
