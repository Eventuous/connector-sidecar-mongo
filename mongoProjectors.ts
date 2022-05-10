import {AnyEventHandler, EventHandler} from "./common";
import {DeleteOne, InsertOne, UpdateOne} from "./compiled/proto/project";

function project<T>(eventType: string, handler: EventHandler<T>): AnyEventHandler {
    // @ts-ignore
    return {eventType, handler: x => handler(x as T)};
}

export const insertOne = <T>(eventType: string, handler: (event: T) => { document: object }) =>
    project<T>(eventType, e => InsertOne.fromPartial(handler(e)));

export const updateOne = <T>(eventType: string, handler: (event: T) => { filter: object, update: object }) =>
    project<T>(eventType, e => UpdateOne.fromPartial(handler(e)));

export const deleteOne = <T>(eventType: string, handler: (event: T) => { filter: object }) =>
    project<T>(eventType, e => DeleteOne.fromPartial(handler(e)));
