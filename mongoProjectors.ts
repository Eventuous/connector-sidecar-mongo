import {AnyEventHandlerMap, EventHandler} from "./common";

export const project = <T>(eventType: string, handler: EventHandler<T>): AnyEventHandlerMap => {
    return {eventType, handler}
};

export const insertOne = <T>(eventType: string, handler: (event: T) => { document: object }): AnyEventHandlerMap => {
    return project<T>(eventType, e => {
        const result = handler(e);
        const doc = JSON.stringify(result.document);
        return {insertOne: {document: doc}};
    })
};

export const updateOne = <T>(eventType: string, handler: (event: T) => { filter: object, update: object }): AnyEventHandlerMap => {
    return project<T>(eventType, e => {
        const result = handler(e);
        return {updateOne: {filter: JSON.stringify(result.filter), update: JSON.stringify(result.update)}};
    })
};
