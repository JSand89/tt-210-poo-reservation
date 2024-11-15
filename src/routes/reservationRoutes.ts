import { Router } from "express";
import { createReservation, listReservation } from "../controllers/reservationController";

const router:Router = Router()

router.post("/",createReservation)
router.get("/",listReservation)

export default router