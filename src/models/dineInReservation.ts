import { Reservation } from "./reservation";
import { Customer } from "./customer";
import { Table } from "./table";
export class DineInReservation extends Reservation{
    constructor(
        reservationId:number,
        customer:Customer,
        dateTime:Date,
        numberOfGuests:number,
        public table:Table
    ){
        super(reservationId,customer,dateTime,numberOfGuests)
    }
    confirm(): void {
        if(this.table.getIsAvailable()){
            this.table.markOccupied()
            console.log(`Dine-in reservation confirmed for table ${this.table.getTableNumber()}`)
        }else{
            console.log(`Table ${this.table.getTableNumber()} is not available`)
        }
    }
    cancel(): void {
        this.table.markAvailable()
        console.log(`Dine-in reservation cancelled for table ${this.table.getTableNumber}`)
    }
}