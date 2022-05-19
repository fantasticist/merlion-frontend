// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "merlion/ve/v1/query.proto" (package "merlion.ve.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./genesis";
/**
 * @generated from protobuf message merlion.ve.v1.QueryTotalVotingPowerRequest
 */
export interface QueryTotalVotingPowerRequest {
    /**
     * @generated from protobuf field: uint64 at_time = 1;
     */
    atTime: string;
    /**
     * @generated from protobuf field: int64 at_block = 2;
     */
    atBlock: string;
}
/**
 * @generated from protobuf message merlion.ve.v1.QueryTotalVotingPowerResponse
 */
export interface QueryTotalVotingPowerResponse {
    /**
     * @generated from protobuf field: string power = 1;
     */
    power: string;
}
/**
 * @generated from protobuf message merlion.ve.v1.QueryVotingPowerRequest
 */
export interface QueryVotingPowerRequest {
    /**
     * @generated from protobuf field: string ve_id = 1;
     */
    veId: string;
    /**
     * @generated from protobuf field: uint64 at_time = 2;
     */
    atTime: string;
    /**
     * @generated from protobuf field: int64 at_block = 3;
     */
    atBlock: string;
}
/**
 * @generated from protobuf message merlion.ve.v1.QueryVotingPowerResponse
 */
export interface QueryVotingPowerResponse {
    /**
     * @generated from protobuf field: string power = 1;
     */
    power: string;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from protobuf message merlion.ve.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from protobuf message merlion.ve.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * params holds all the parameters of this module.
     *
     * @generated from protobuf field: merlion.ve.v1.Params params = 1;
     */
    params?: Params;
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryTotalVotingPowerRequest$Type extends MessageType<QueryTotalVotingPowerRequest> {
    constructor() {
        super("merlion.ve.v1.QueryTotalVotingPowerRequest", [
            { no: 1, name: "at_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "at_block", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<QueryTotalVotingPowerRequest>): QueryTotalVotingPowerRequest {
        const message = { atTime: "0", atBlock: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryTotalVotingPowerRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryTotalVotingPowerRequest): QueryTotalVotingPowerRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 at_time */ 1:
                    message.atTime = reader.uint64().toString();
                    break;
                case /* int64 at_block */ 2:
                    message.atBlock = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryTotalVotingPowerRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 at_time = 1; */
        if (message.atTime !== "0")
            writer.tag(1, WireType.Varint).uint64(message.atTime);
        /* int64 at_block = 2; */
        if (message.atBlock !== "0")
            writer.tag(2, WireType.Varint).int64(message.atBlock);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.ve.v1.QueryTotalVotingPowerRequest
 */
export const QueryTotalVotingPowerRequest = new QueryTotalVotingPowerRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryTotalVotingPowerResponse$Type extends MessageType<QueryTotalVotingPowerResponse> {
    constructor() {
        super("merlion.ve.v1.QueryTotalVotingPowerResponse", [
            { no: 1, name: "power", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ]);
    }
    create(value?: PartialMessage<QueryTotalVotingPowerResponse>): QueryTotalVotingPowerResponse {
        const message = { power: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryTotalVotingPowerResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryTotalVotingPowerResponse): QueryTotalVotingPowerResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string power */ 1:
                    message.power = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryTotalVotingPowerResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string power = 1; */
        if (message.power !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.power);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.ve.v1.QueryTotalVotingPowerResponse
 */
export const QueryTotalVotingPowerResponse = new QueryTotalVotingPowerResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryVotingPowerRequest$Type extends MessageType<QueryVotingPowerRequest> {
    constructor() {
        super("merlion.ve.v1.QueryVotingPowerRequest", [
            { no: 1, name: "ve_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "at_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "at_block", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<QueryVotingPowerRequest>): QueryVotingPowerRequest {
        const message = { veId: "", atTime: "0", atBlock: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryVotingPowerRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryVotingPowerRequest): QueryVotingPowerRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string ve_id */ 1:
                    message.veId = reader.string();
                    break;
                case /* uint64 at_time */ 2:
                    message.atTime = reader.uint64().toString();
                    break;
                case /* int64 at_block */ 3:
                    message.atBlock = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryVotingPowerRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string ve_id = 1; */
        if (message.veId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.veId);
        /* uint64 at_time = 2; */
        if (message.atTime !== "0")
            writer.tag(2, WireType.Varint).uint64(message.atTime);
        /* int64 at_block = 3; */
        if (message.atBlock !== "0")
            writer.tag(3, WireType.Varint).int64(message.atBlock);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.ve.v1.QueryVotingPowerRequest
 */
export const QueryVotingPowerRequest = new QueryVotingPowerRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryVotingPowerResponse$Type extends MessageType<QueryVotingPowerResponse> {
    constructor() {
        super("merlion.ve.v1.QueryVotingPowerResponse", [
            { no: 1, name: "power", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ]);
    }
    create(value?: PartialMessage<QueryVotingPowerResponse>): QueryVotingPowerResponse {
        const message = { power: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryVotingPowerResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryVotingPowerResponse): QueryVotingPowerResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string power */ 1:
                    message.power = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryVotingPowerResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string power = 1; */
        if (message.power !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.power);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.ve.v1.QueryVotingPowerResponse
 */
export const QueryVotingPowerResponse = new QueryVotingPowerResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor() {
        super("merlion.ve.v1.QueryParamsRequest", []);
    }
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.ve.v1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor() {
        super("merlion.ve.v1.QueryParamsResponse", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* merlion.ve.v1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* merlion.ve.v1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.ve.v1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
/**
 * @generated ServiceType for protobuf service merlion.ve.v1.Query
 */
export const Query = new ServiceType("merlion.ve.v1.Query", [
    { name: "TotalVotingPower", options: { "google.api.http": { get: "/merlion/ve/v1/total_voting_power" } }, I: QueryTotalVotingPowerRequest, O: QueryTotalVotingPowerResponse },
    { name: "VotingPower", options: { "google.api.http": { get: "/merlion/ve/v1/voting_power/{ve_id}" } }, I: QueryVotingPowerRequest, O: QueryVotingPowerResponse },
    { name: "Params", options: { "google.api.http": { get: "/merlion/ve/v1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse }
]);