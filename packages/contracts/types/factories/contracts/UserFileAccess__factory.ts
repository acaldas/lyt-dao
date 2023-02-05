/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UserFileAccess,
  UserFileAccessInterface,
} from "../../contracts/UserFileAccess";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "AddUserFileAccess",
    type: "event",
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
    inputs: [
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "addMultipleUserFileAccess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "addUserFileAccess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_host",
        type: "string",
      },
    ],
    name: "getHostPrice",
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
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "getMultipleUserFilePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getUserFilePrice",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "hasUserFileAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "string",
        name: "_host",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setHostEventPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_hosts",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "_counts",
        type: "uint256[]",
      },
    ],
    name: "setUserFileEventCount",
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
] as const;

const _bytecode =
  "0x608060405266038d7ea4c6800060015534801561001b57600080fd5b5061003861002d61003d60201b60201c565b61004560201b60201c565b610109565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611c2e806101186000396000f3fe60806040526004361061009b5760003560e01c8063715018a611610064578063715018a6146101a95780637427a7f6146101c05780638da5cb5b146101fe57806398615b7914610229578063f2fde38b14610245578063fed69ed31461026e5761009b565b8062e63e84146100a05780631ad44921146100dd578063392a3f811461011a57806365e5c8961461014357806370e5101014610180575b600080fd5b3480156100ac57600080fd5b506100c760048036038101906100c29190610cdd565b61028a565b6040516100d49190610d43565b60405180910390f35b3480156100e957600080fd5b5061010460048036038101906100ff9190610d8a565b6102ce565b6040516101119190610d43565b60405180910390f35b34801561012657600080fd5b50610141600480360381019061013c9190610e63565b6103d7565b005b34801561014f57600080fd5b5061016a60048036038101906101659190610d8a565b61050d565b6040516101779190610f13565b60405180910390f35b34801561018c57600080fd5b506101a760048036038101906101a29190610f2e565b610574565b005b3480156101b557600080fd5b506101be6105a6565b005b3480156101cc57600080fd5b506101e760048036038101906101e29190610f8e565b6105ba565b6040516101f5929190611099565b60405180910390f35b34801561020a57600080fd5b5061021361070c565b604051610220919061110a565b60405180910390f35b610243600480360381019061023e9190610f8e565b610735565b005b34801561025157600080fd5b5061026c60048036038101906102679190611151565b6108c7565b005b61028860048036038101906102839190610d8a565b61094a565b005b6000806003848460405161029f9291906111bd565b9081526020016040518091039020549050600081036102c3576001549150506102c8565b809150505b92915050565b60008060009050600060026000858152602001908152602001600020905060005b81805490508110156103cc5760008282815481106103105761030f6111d6565b5b906000526020600020906002020190503073ffffffffffffffffffffffffffffffffffffffff1662e63e84826000016040518263ffffffff1660e01b815260040161035b919061130f565b602060405180830381865afa158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c9190611346565b81600101546103ab91906113a2565b846103b691906113e4565b93505080806103c490611418565b9150506102ef565b508192505050919050565b6103df610b16565b8181905084849050146103f157600080fd5b60005b84849050811015610505576002600087815260200190815260200160002060405180604001604052808787858181106104305761042f6111d6565b5b9050602002810190610442919061146f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200185858581811061049d5761049c6111d6565b5b90506020020135815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816104e591906116a3565b5060208201518160010155505080806104fd90611418565b9150506103f4565b505050505050565b60006004600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b61057c610b16565b806003848460405161058f9291906111bd565b908152602001604051809103902081905550505050565b6105ae610b16565b6105b86000610b94565b565b600060606000808585905067ffffffffffffffff8111156105de576105dd6114dd565b5b60405190808252806020026020018201604052801561060c5781602001602082028036833780820191505090505b50905060005b868690508110156106fc576000878783818110610632576106316111d6565b5b90506020020135905060003073ffffffffffffffffffffffffffffffffffffffff16631ad44921836040518263ffffffff1660e01b81526004016106769190610d43565b602060405180830381865afa158015610693573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b79190611346565b905080856106c591906113e4565b9450808484815181106106db576106da6111d6565b5b602002602001018181525050505080806106f490611418565b915050610612565b5081819350935050509250929050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000803073ffffffffffffffffffffffffffffffffffffffff16637427a7f685856040518363ffffffff1660e01b81526004016107739291906117df565b600060405180830381865afa158015610790573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107b99190611923565b9150915081341015610800576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f7906119cb565b60405180910390fd5b60005b848490508110156108c0573073ffffffffffffffffffffffffffffffffffffffff1663fed69ed383838151811061083d5761083c6111d6565b5b6020026020010151878785818110610858576108576111d6565b5b905060200201356040518363ffffffff1660e01b815260040161087b9190610d43565b6000604051808303818588803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b505050505080806108b890611418565b915050610803565b5050505050565b6108cf610b16565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093590611a5d565b60405180910390fd5b61094781610b94565b50565b60006002600083815260200190815260200160002080549050116109a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099a90611ac9565b60405180910390fd5b60003073ffffffffffffffffffffffffffffffffffffffff16631ad44921836040518263ffffffff1660e01b81526004016109de9190610d43565b602060405180830381865afa1580156109fb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1f9190611346565b905080341015610a64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5b90611b35565b60405180910390fd5b60016004600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fc07d3b5090161100e18fad39e717305844f0baa28b5ef048073ca5e53be40f1d823383604051610b0093929190611b55565b60405180910390a1610b128282610c58565b5050565b610b1e610c5c565b73ffffffffffffffffffffffffffffffffffffffff16610b3c61070c565b73ffffffffffffffffffffffffffffffffffffffff1614610b92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8990611bd8565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c9d57610c9c610c78565b5b8235905067ffffffffffffffff811115610cba57610cb9610c7d565b5b602083019150836001820283011115610cd657610cd5610c82565b5b9250929050565b60008060208385031215610cf457610cf3610c6e565b5b600083013567ffffffffffffffff811115610d1257610d11610c73565b5b610d1e85828601610c87565b92509250509250929050565b6000819050919050565b610d3d81610d2a565b82525050565b6000602082019050610d586000830184610d34565b92915050565b610d6781610d2a565b8114610d7257600080fd5b50565b600081359050610d8481610d5e565b92915050565b600060208284031215610da057610d9f610c6e565b5b6000610dae84828501610d75565b91505092915050565b60008083601f840112610dcd57610dcc610c78565b5b8235905067ffffffffffffffff811115610dea57610de9610c7d565b5b602083019150836020820283011115610e0657610e05610c82565b5b9250929050565b60008083601f840112610e2357610e22610c78565b5b8235905067ffffffffffffffff811115610e4057610e3f610c7d565b5b602083019150836020820283011115610e5c57610e5b610c82565b5b9250929050565b600080600080600060608688031215610e7f57610e7e610c6e565b5b6000610e8d88828901610d75565b955050602086013567ffffffffffffffff811115610eae57610ead610c73565b5b610eba88828901610db7565b9450945050604086013567ffffffffffffffff811115610edd57610edc610c73565b5b610ee988828901610e0d565b92509250509295509295909350565b60008115159050919050565b610f0d81610ef8565b82525050565b6000602082019050610f286000830184610f04565b92915050565b600080600060408486031215610f4757610f46610c6e565b5b600084013567ffffffffffffffff811115610f6557610f64610c73565b5b610f7186828701610c87565b93509350506020610f8486828701610d75565b9150509250925092565b60008060208385031215610fa557610fa4610c6e565b5b600083013567ffffffffffffffff811115610fc357610fc2610c73565b5b610fcf85828601610e0d565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61101081610d2a565b82525050565b60006110228383611007565b60208301905092915050565b6000602082019050919050565b600061104682610fdb565b6110508185610fe6565b935061105b83610ff7565b8060005b8381101561108c5781516110738882611016565b975061107e8361102e565b92505060018101905061105f565b5085935050505092915050565b60006040820190506110ae6000830185610d34565b81810360208301526110c0818461103b565b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110f4826110c9565b9050919050565b611104816110e9565b82525050565b600060208201905061111f60008301846110fb565b92915050565b61112e816110e9565b811461113957600080fd5b50565b60008135905061114b81611125565b92915050565b60006020828403121561116757611166610c6e565b5b60006111758482850161113c565b91505092915050565b600081905092915050565b82818337600083830152505050565b60006111a4838561117e565b93506111b1838584611189565b82840190509392505050565b60006111ca828486611198565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061124c57607f821691505b60208210810361125f5761125e611205565b5b50919050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b6000815461129881611234565b6112a28186611265565b945060018216600081146112bd57600181146112d357611306565b60ff198316865281151560200286019350611306565b6112dc85611276565b60005b838110156112fe578154818901526001820191506020810190506112df565b808801955050505b50505092915050565b60006020820190508181036000830152611329818461128b565b905092915050565b60008151905061134081610d5e565b92915050565b60006020828403121561135c5761135b610c6e565b5b600061136a84828501611331565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113ad82610d2a565b91506113b883610d2a565b92508282026113c681610d2a565b915082820484148315176113dd576113dc611373565b5b5092915050565b60006113ef82610d2a565b91506113fa83610d2a565b925082820190508082111561141257611411611373565b5b92915050565b600061142382610d2a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361145557611454611373565b5b600182019050919050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261148c5761148b611460565b5b80840192508235915067ffffffffffffffff8211156114ae576114ad611465565b5b6020830192506001820236038313156114ca576114c961146a565b5b509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020601f8301049050919050565b600082821b905092915050565b6000600883026115597fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261151c565b611563868361151c565b95508019841693508086168417925050509392505050565b6000819050919050565b60006115a061159b61159684610d2a565b61157b565b610d2a565b9050919050565b6000819050919050565b6115ba83611585565b6115ce6115c6826115a7565b848454611529565b825550505050565b600090565b6115e36115d6565b6115ee8184846115b1565b505050565b5b81811015611612576116076000826115db565b6001810190506115f4565b5050565b601f8211156116575761162881611276565b6116318461150c565b81016020851015611640578190505b61165461164c8561150c565b8301826115f3565b50505b505050565b600082821c905092915050565b600061167a6000198460080261165c565b1980831691505092915050565b60006116938383611669565b9150826002028217905092915050565b6116ac826114d2565b67ffffffffffffffff8111156116c5576116c46114dd565b5b6116cf8254611234565b6116da828285611616565b600060209050601f83116001811461170d57600084156116fb578287015190505b6117058582611687565b86555061176d565b601f19841661171b86611276565b60005b828110156117435784890151825560018201915060208501945060208101905061171e565b86831015611760578489015161175c601f891682611669565b8355505b6001600288020188555050505b505050505050565b600080fd5b82818337505050565b600061178f8385610fe6565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156117c2576117c1611775565b5b6020830292506117d383858461177a565b82840190509392505050565b600060208201905081810360008301526117fa818486611783565b90509392505050565b6000601f19601f8301169050919050565b61181d82611803565b810181811067ffffffffffffffff8211171561183c5761183b6114dd565b5b80604052505050565b600061184f610c64565b905061185b8282611814565b919050565b600067ffffffffffffffff82111561187b5761187a6114dd565b5b602082029050602081019050919050565b600061189f61189a84611860565b611845565b905080838252602082019050602084028301858111156118c2576118c1610c82565b5b835b818110156118eb57806118d78882611331565b8452602084019350506020810190506118c4565b5050509392505050565b600082601f83011261190a57611909610c78565b5b815161191a84826020860161188c565b91505092915050565b6000806040838503121561193a57611939610c6e565b5b600061194885828601611331565b925050602083015167ffffffffffffffff81111561196957611968610c73565b5b611975858286016118f5565b9150509250929050565b7f4e6f7420656e6f7567682066756e647320666f7220616c6c2066696c65730000600082015250565b60006119b5601e83611265565b91506119c08261197f565b602082019050919050565b600060208201905081810360008301526119e4816119a8565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611a47602683611265565b9150611a52826119eb565b604082019050919050565b60006020820190508181036000830152611a7681611a3a565b9050919050565b7f46696c65206576656e747320636f756e74206e6f742073657400000000000000600082015250565b6000611ab3601983611265565b9150611abe82611a7d565b602082019050919050565b60006020820190508181036000830152611ae281611aa6565b9050919050565b7f4e6f7420656e6f7567682066756e647300000000000000000000000000000000600082015250565b6000611b1f601083611265565b9150611b2a82611ae9565b602082019050919050565b60006020820190508181036000830152611b4e81611b12565b9050919050565b6000606082019050611b6a6000830186610d34565b611b7760208301856110fb565b611b846040830184610d34565b949350505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611bc2602083611265565b9150611bcd82611b8c565b602082019050919050565b60006020820190508181036000830152611bf181611bb5565b905091905056fea26469706673582212204fe0a0f5c9e556fa2461eccb9ff3ccbef7d528c07030c4f784477be096fddf4564736f6c63430008110033";

type UserFileAccessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserFileAccessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserFileAccess__factory extends ContractFactory {
  constructor(...args: UserFileAccessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserFileAccess> {
    return super.deploy(overrides || {}) as Promise<UserFileAccess>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserFileAccess {
    return super.attach(address) as UserFileAccess;
  }
  override connect(signer: Signer): UserFileAccess__factory {
    return super.connect(signer) as UserFileAccess__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserFileAccessInterface {
    return new utils.Interface(_abi) as UserFileAccessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserFileAccess {
    return new Contract(address, _abi, signerOrProvider) as UserFileAccess;
  }
}
