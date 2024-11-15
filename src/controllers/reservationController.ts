import { Request, Response, NextFunction } from "express";
import { Customer } from "../models/customer";
import { DineInReservation } from "../models/dineInReservation";
import { Table } from "../models/table";

let reservations: DineInReservation[] = []
let nextId:number = 1


export const createReservation = (req:Request,res:Response,next:NextFunction):void=>{
    try {
        const {name,phoneNumber, dateTime, numberOfGuest, tableNumber} = req.body
        const customer = new Customer(name,phoneNumber)
        const table = new Table(tableNumber,numberOfGuest)
        if(!table.getIsAvailable()){
            res.status(400).json({message:"Table is not available"})
        }
        const dateNow = new Date(dateTime)
        const reservation = new DineInReservation(nextId++,customer,dateNow,numberOfGuest,table)
        reservations.push(reservation)
        reservation.confirm()
        res.status(201).json({message:"reservationn created", reservation})
    } catch (error) {
        next(error)
    }
}
export const listReservation = (req:Request,res:Response,next:NextFunction):void=>{
    try {
        res.status(200).json(reservations)
    } catch (error) {
        next(error)
    }
}