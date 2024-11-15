import express, {Application} from "express"
import reservationRoutes from "./routes/reservationRoutes"
import tablesRoutes from "./routes/tableRoutes"
import connectDB from "./config/bd"

const app:Application = express()

const PORT = process.env.PORT || 3000
connectDB()

app.use(express.json())

app.use("/api/reservations",reservationRoutes)
app.use("/api/tables",tablesRoutes)
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})
