// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/auth/v1beta1/query.proto" (package "cosmos.auth.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from '@protobuf-ts/runtime-rpc'
import type { ServiceInfo } from '@protobuf-ts/runtime-rpc'
import { Query } from './query'
import type { QueryParamsResponse } from './query'
import type { QueryParamsRequest } from './query'
import type { QueryAccountResponse } from './query'
import type { QueryAccountRequest } from './query'
import { stackIntercept } from '@protobuf-ts/runtime-rpc'
import type { QueryAccountsResponse } from './query'
import type { QueryAccountsRequest } from './query'
import type { UnaryCall } from '@protobuf-ts/runtime-rpc'
import type { RpcOptions } from '@protobuf-ts/runtime-rpc'
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.auth.v1beta1.Query
 */
export interface IQueryClient {
  /**
   * Accounts returns all the existing accounts
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from protobuf rpc: Accounts(cosmos.auth.v1beta1.QueryAccountsRequest) returns (cosmos.auth.v1beta1.QueryAccountsResponse);
   */
  accounts(
    input: QueryAccountsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAccountsRequest, QueryAccountsResponse>
  /**
   * Account returns account details based on address.
   *
   * @generated from protobuf rpc: Account(cosmos.auth.v1beta1.QueryAccountRequest) returns (cosmos.auth.v1beta1.QueryAccountResponse);
   */
  account(
    input: QueryAccountRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAccountRequest, QueryAccountResponse>
  /**
   * Params queries all parameters.
   *
   * @generated from protobuf rpc: Params(cosmos.auth.v1beta1.QueryParamsRequest) returns (cosmos.auth.v1beta1.QueryParamsResponse);
   */
  params(
    input: QueryParamsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryParamsRequest, QueryParamsResponse>
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.auth.v1beta1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
  typeName = Query.typeName
  methods = Query.methods
  options = Query.options
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Accounts returns all the existing accounts
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from protobuf rpc: Accounts(cosmos.auth.v1beta1.QueryAccountsRequest) returns (cosmos.auth.v1beta1.QueryAccountsResponse);
   */
  accounts(
    input: QueryAccountsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAccountsRequest, QueryAccountsResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryAccountsRequest, QueryAccountsResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * Account returns account details based on address.
   *
   * @generated from protobuf rpc: Account(cosmos.auth.v1beta1.QueryAccountRequest) returns (cosmos.auth.v1beta1.QueryAccountResponse);
   */
  account(
    input: QueryAccountRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAccountRequest, QueryAccountResponse> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryAccountRequest, QueryAccountResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * Params queries all parameters.
   *
   * @generated from protobuf rpc: Params(cosmos.auth.v1beta1.QueryParamsRequest) returns (cosmos.auth.v1beta1.QueryParamsResponse);
   */
  params(
    input: QueryParamsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryParamsRequest, QueryParamsResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
}