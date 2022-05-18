export interface RoomBooked {
    bookingId: string;
    roomId: string;
    guestId: string;
    checkIn: Date;
    checkOut: Date;
    bookingPrice: number;
    prepaidAmount: number;
}

export interface PaymentRegistered {
    bookingId: string;
    paymentId: string;
    paidAmount: number;
    outstanding: number;
}

export interface BookingFullyPaid {
    bookingId: string;
}
