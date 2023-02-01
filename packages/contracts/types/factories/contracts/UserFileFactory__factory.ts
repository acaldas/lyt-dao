/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UserFileFactory,
  UserFileFactoryInterface,
} from "../../contracts/UserFileFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_masterContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract UserFile",
        name: "userFile",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "UserFileCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "createUserFile",
    outputs: [
      {
        internalType: "contract UserFile",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMasterContract",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserFiles",
    outputs: [
      {
        internalType: "contract UserFile[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userFileAddresses",
    outputs: [
      {
        internalType: "contract UserFile",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610caa380380610caa833981810160405281019061003291906101c4565b61004e61004361009560201b60201c565b61009d60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101f1565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061019182610166565b9050919050565b6101a181610186565b81146101ac57600080fd5b50565b6000815190506101be81610198565b92915050565b6000602082840312156101da576101d9610161565b5b60006101e8848285016101af565b91505092915050565b610aaa806102006000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063715018a61161005b578063715018a6146100ff5780638da5cb5b14610109578063f2fde38b14610127578063fadefe5e146101435761007c565b8062be2fec146100815780630c2a459f1461009f5780631fc37922146100cf575b600080fd5b610089610173565b60405161009691906106f3565b60405180910390f35b6100b960048036038101906100b49190610775565b61019d565b6040516100c69190610814565b60405180910390f35b6100e960048036038101906100e4919061082f565b6101eb565b6040516100f6919061091a565b60405180910390f35b6101076102b8565b005b6101116102cc565b60405161011e91906106f3565b60405180910390f35b610141600480360381019061013c919061082f565b6102f5565b005b61015d6004803603810190610158919061082f565b610378565b60405161016a9190610814565b60405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260205281600052604060002081815481106101b957600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156102ac57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610262575b50505050509050919050565b6102c06104fe565b6102ca600061057c565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102fd6104fe565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361036c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610363906109bf565b60405180910390fd5b6103758161057c565b50565b60006103826104fe565b60006103af600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610640565b90508073ffffffffffffffffffffffffffffffffffffffff166319ab453c846040518263ffffffff1660e01b81526004016103ea91906106f3565b600060405180830381600087803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b50505050600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1d56d4bbff0a2bd66664ccee0ac9499d712566361b0eb23a54391bf61b2bde7b81846040516104ed9291906109df565b60405180910390a180915050919050565b6105066106aa565b73ffffffffffffffffffffffffffffffffffffffff166105246102cc565b73ffffffffffffffffffffffffffffffffffffffff161461057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057190610a54565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f092505050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106dd826106b2565b9050919050565b6106ed816106d2565b82525050565b600060208201905061070860008301846106e4565b92915050565b600080fd5b61071c816106d2565b811461072757600080fd5b50565b60008135905061073981610713565b92915050565b6000819050919050565b6107528161073f565b811461075d57600080fd5b50565b60008135905061076f81610749565b92915050565b6000806040838503121561078c5761078b61070e565b5b600061079a8582860161072a565b92505060206107ab85828601610760565b9150509250929050565b6000819050919050565b60006107da6107d56107d0846106b2565b6107b5565b6106b2565b9050919050565b60006107ec826107bf565b9050919050565b60006107fe826107e1565b9050919050565b61080e816107f3565b82525050565b60006020820190506108296000830184610805565b92915050565b6000602082840312156108455761084461070e565b5b60006108538482850161072a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610891816107f3565b82525050565b60006108a38383610888565b60208301905092915050565b6000602082019050919050565b60006108c78261085c565b6108d18185610867565b93506108dc83610878565b8060005b8381101561090d5781516108f48882610897565b97506108ff836108af565b9250506001810190506108e0565b5085935050505092915050565b6000602082019050818103600083015261093481846108bc565b905092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006109a960268361093c565b91506109b48261094d565b604082019050919050565b600060208201905081810360008301526109d88161099c565b9050919050565b60006040820190506109f46000830185610805565b610a0160208301846106e4565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610a3e60208361093c565b9150610a4982610a08565b602082019050919050565b60006020820190508181036000830152610a6d81610a31565b905091905056fea26469706673582212202d6f7944cce549b4d7fee504ebb2637eb7d39e5d3b44ec217736c1433f0d225d64736f6c63430008110033";

type UserFileFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserFileFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserFileFactory__factory extends ContractFactory {
  constructor(...args: UserFileFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _masterContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserFileFactory> {
    return super.deploy(
      _masterContract,
      overrides || {}
    ) as Promise<UserFileFactory>;
  }
  override getDeployTransaction(
    _masterContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_masterContract, overrides || {});
  }
  override attach(address: string): UserFileFactory {
    return super.attach(address) as UserFileFactory;
  }
  override connect(signer: Signer): UserFileFactory__factory {
    return super.connect(signer) as UserFileFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserFileFactoryInterface {
    return new utils.Interface(_abi) as UserFileFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserFileFactory {
    return new Contract(address, _abi, signerOrProvider) as UserFileFactory;
  }
}
