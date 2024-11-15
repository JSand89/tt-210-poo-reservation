import express, {Application} from "express"
import reservationRoutes from "./routes/reservationRoutes"
const app:Application = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/reservations",reservationRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})
