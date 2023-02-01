/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface UserFileInterface extends utils.Interface {
  functions: {
    "getUser()": FunctionFragment;
    "init(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getUser" | "init"): FunctionFragment;

  encodeFunctionData(functionFragment: "getUser", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;

  events: {};
}

export interface UserFile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserFileInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getUser(overrides?: CallOverrides): Promise<[string]>;

    init(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getUser(overrides?: CallOverrides): Promise<string>;

  init(
    _user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getUser(overrides?: CallOverrides): Promise<string>;

    init(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getUser(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getUser(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}