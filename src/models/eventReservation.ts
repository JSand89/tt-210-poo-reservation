import { Reservation } from "./reservation";
import { Customer } from "./customer";

export class EventReservation extends Reservation{
    constructor(
        reservationId:number,
        customer:Customer,
        dateTime:Date,
        numberOfGuests:number,
        public eventSpace: String
    ){
        super(reservationId,customer,dateTime,numberOfGuests)
    }

    confirm(): void {
        console.log(`Event reservation confirmed ${this.eventSpace} in date: ${this.dateTime.toISOString}`)
    }
    cancel(): void {
        console.log(`Event reservation cancelled ${this.eventSpace} in date: ${this.dateTime.toISOString}`)
    }
}