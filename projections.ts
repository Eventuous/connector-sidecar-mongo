import {Projector} from "./common";
import {insertOne, updateOne} from "./mongoProjectors";
import {BookingFullyPaid, PaymentRegistered, RoomBooked} from "./eventTypes";

export const mongoHandlers: Projector = [
    insertOne<RoomBooked>(
        "V1.RoomBooked",
        event => ({
            document: {
                _id: event.bookingId,
                roomId: event.roomId,
                guestId: event.guestId,
                checkInDate: event.checkIn,
                checkOutDate: event.checkOut,
                bookingPrice: event.bookingPrice,
                paidAmount: event.prepaidAmount,
                paid: false
            }
        })
    ),
    updateOne<PaymentRegistered>(
        "V1.PaymentRegistered",
        event => ({
            filter: {_id: event.bookingId},
            update: { $set: { outstanding: event.outstanding, } }
        })
    ),
    updateOne<BookingFullyPaid>(
        "V1.FullyPaid",
        event => ({
            filter: {_id: event.bookingId},
            update: { $set: { paid: true } }
        })
    )
];
