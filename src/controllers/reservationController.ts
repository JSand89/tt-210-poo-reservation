import { Request, Response, NextFunction } from "express";
import Customer from "../models/customer";
import Table from "../models/table";
import Reservation from "../models/reservation";
export const createReservation = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const {name, phoneNumber, dateTime, numberOfGuest, tableNumber} = req.body
        const table = await Table.findOne({tableNumber,isAvailable:true})
        if(!table){
            res.status(400).json({message:`Table ${tableNumber} is not available`})
            return
        }
        let customer = await Customer.findOne({phoneNumber})
        if(!customer){
            customer = new Customer({name,phoneNumber})
            await customer.save()
        }
        const reservation = new Reservation({
            customer:customer._id,
            table:table._id,
            dateTime,
            numberOfGuest
        })
        await reservation.save()
        table.isAvailable = false
        await table.save()
        res.status(201).json({message:`Reservation created`,reservation})
    } catch (error) {
        next(error)
    }
}

export const listReservations = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const reservations = await Reservation.find()
        .populate("customer","name phoneNumber")
        .populate("table", "tableNumber capacity isAvailable")

    if(!reservations.length){
        res.status(404).json({message:"No reservations found"})
        return
    }
    res.status(200).json(reservations)
    } catch (error) {
        next(error)
    }
}