import {AnyEventHandlerMap, EventHandler, WrapToAny} from "./common";
import {DeleteOne, Ignore, InsertOne, UpdateOne} from "./compiled/proto/project";

export type ValidResult = Ignore | InsertOne | UpdateOne | DeleteOne;

export function project<T>(eventType: string, handler: EventHandler<T>): AnyEventHandlerMap {
    // @ts-ignore
    return {eventType, handler: x => handler(x as T)};
}

export const insertOne = <T>(eventType: string, handler: (event: T) => { document: object }): AnyEventHandlerMap => {
    return project<T>(eventType, e => {
        const result = InsertOne.fromPartial(handler(e));
        return WrapToAny(result);
    })
};

export const updateOne = <T>(eventType: string, handler: (event: T) => { filter: object, update: object }): AnyEventHandlerMap => {
    return project<T>(eventType, e => {
        const result = UpdateOne.fromPartial(handler(e));
        return WrapToAny(result);
    })
};
