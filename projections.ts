import {Projector} from "./common";
import {insertOne, updateOne} from "./mongoProjectors";
import {PaymentRegistered, RoomBooked} from "./eventTypes";

export const mongoHandlers: Projector = [
    insertOne<RoomBooked>(
        "V1.RoomBooked",
        event => ({
            document: {
                _id: event.bookingId,
                roomId: event.roomId,
                checkIn: event.checkIn,
                checkOut: event.checkOut,
                price: event.price
            }
        })
    ),
    updateOne<PaymentRegistered>(
        "V1.PaymentRegistered",
        event => ({
            filter: {_id: event.bookingId},
            update: {$set: {outstandingAmount: event.outstandingAmount}}
        })
    )
];
