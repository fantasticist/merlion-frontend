// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "evmos/inflation/v1/query.proto" (package "evmos.inflation.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from '@protobuf-ts/runtime-rpc'
import type { ServiceInfo } from '@protobuf-ts/runtime-rpc'
import { Query } from './query'
import type { QueryParamsResponse } from './query'
import type { QueryParamsRequest } from './query'
import type { QueryInflationRateResponse } from './query'
import type { QueryInflationRateRequest } from './query'
import type { QueryTotalSupplyResponse } from './query'
import type { QueryTotalSupplyRequest } from './query'
import type { QuerySkippedEpochsResponse } from './query'
import type { QuerySkippedEpochsRequest } from './query'
import type { QueryEpochMintProvisionResponse } from './query'
import type { QueryEpochMintProvisionRequest } from './query'
import { stackIntercept } from '@protobuf-ts/runtime-rpc'
import type { QueryPeriodResponse } from './query'
import type { QueryPeriodRequest } from './query'
import type { UnaryCall } from '@protobuf-ts/runtime-rpc'
import type { RpcOptions } from '@protobuf-ts/runtime-rpc'
/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from protobuf service evmos.inflation.v1.Query
 */
export interface IQueryClient {
  /**
   * Period retrieves current period.
   *
   * @generated from protobuf rpc: Period(evmos.inflation.v1.QueryPeriodRequest) returns (evmos.inflation.v1.QueryPeriodResponse);
   */
  period(
    input: QueryPeriodRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryPeriodRequest, QueryPeriodResponse>
  /**
   * EpochMintProvision retrieves current minting epoch provision value.
   *
   * @generated from protobuf rpc: EpochMintProvision(evmos.inflation.v1.QueryEpochMintProvisionRequest) returns (evmos.inflation.v1.QueryEpochMintProvisionResponse);
   */
  epochMintProvision(
    input: QueryEpochMintProvisionRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>
  /**
   * SkippedEpochs retrieves the total number of skipped epochs.
   *
   * @generated from protobuf rpc: SkippedEpochs(evmos.inflation.v1.QuerySkippedEpochsRequest) returns (evmos.inflation.v1.QuerySkippedEpochsResponse);
   */
  skippedEpochs(
    input: QuerySkippedEpochsRequest,
    options?: RpcOptions,
  ): UnaryCall<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>
  /**
   * TotalSupply retrieves the total number of skipped epochs.
   *
   * @generated from protobuf rpc: TotalSupply(evmos.inflation.v1.QueryTotalSupplyRequest) returns (evmos.inflation.v1.QueryTotalSupplyResponse);
   */
  totalSupply(
    input: QueryTotalSupplyRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryTotalSupplyRequest, QueryTotalSupplyResponse>
  /**
   * InflationRate retrieves the inflation rate of the current period.
   *
   * @generated from protobuf rpc: InflationRate(evmos.inflation.v1.QueryInflationRateRequest) returns (evmos.inflation.v1.QueryInflationRateResponse);
   */
  inflationRate(
    input: QueryInflationRateRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryInflationRateRequest, QueryInflationRateResponse>
  /**
   * Params retrieves the total set of minting parameters.
   *
   * @generated from protobuf rpc: Params(evmos.inflation.v1.QueryParamsRequest) returns (evmos.inflation.v1.QueryParamsResponse);
   */
  params(
    input: QueryParamsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryParamsRequest, QueryParamsResponse>
}
/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from protobuf service evmos.inflation.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
  typeName = Query.typeName
  methods = Query.methods
  options = Query.options
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Period retrieves current period.
   *
   * @generated from protobuf rpc: Period(evmos.inflation.v1.QueryPeriodRequest) returns (evmos.inflation.v1.QueryPeriodResponse);
   */
  period(
    input: QueryPeriodRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryPeriodRequest, QueryPeriodResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryPeriodRequest, QueryPeriodResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * EpochMintProvision retrieves current minting epoch provision value.
   *
   * @generated from protobuf rpc: EpochMintProvision(evmos.inflation.v1.QueryEpochMintProvisionRequest) returns (evmos.inflation.v1.QueryEpochMintProvisionResponse);
   */
  epochMintProvision(
    input: QueryEpochMintProvisionRequest,
    options?: RpcOptions,
  ): UnaryCall<
    QueryEpochMintProvisionRequest,
    QueryEpochMintProvisionResponse
  > {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      QueryEpochMintProvisionRequest,
      QueryEpochMintProvisionResponse
    >('unary', this._transport, method, opt, input)
  }
  /**
   * SkippedEpochs retrieves the total number of skipped epochs.
   *
   * @generated from protobuf rpc: SkippedEpochs(evmos.inflation.v1.QuerySkippedEpochsRequest) returns (evmos.inflation.v1.QuerySkippedEpochsResponse);
   */
  skippedEpochs(
    input: QuerySkippedEpochsRequest,
    options?: RpcOptions,
  ): UnaryCall<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      QuerySkippedEpochsRequest,
      QuerySkippedEpochsResponse
    >('unary', this._transport, method, opt, input)
  }
  /**
   * TotalSupply retrieves the total number of skipped epochs.
   *
   * @generated from protobuf rpc: TotalSupply(evmos.inflation.v1.QueryTotalSupplyRequest) returns (evmos.inflation.v1.QueryTotalSupplyResponse);
   */
  totalSupply(
    input: QueryTotalSupplyRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryTotalSupplyRequest, QueryTotalSupplyResponse> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryTotalSupplyRequest, QueryTotalSupplyResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * InflationRate retrieves the inflation rate of the current period.
   *
   * @generated from protobuf rpc: InflationRate(evmos.inflation.v1.QueryInflationRateRequest) returns (evmos.inflation.v1.QueryInflationRateResponse);
   */
  inflationRate(
    input: QueryInflationRateRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryInflationRateRequest, QueryInflationRateResponse> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      QueryInflationRateRequest,
      QueryInflationRateResponse
    >('unary', this._transport, method, opt, input)
  }
  /**
   * Params retrieves the total set of minting parameters.
   *
   * @generated from protobuf rpc: Params(evmos.inflation.v1.QueryParamsRequest) returns (evmos.inflation.v1.QueryParamsResponse);
   */
  params(
    input: QueryParamsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
    const method = this.methods[5],
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