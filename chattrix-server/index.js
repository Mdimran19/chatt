import express from "express"
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors"
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/message", messageRoutes)
connectDB()
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is on going ${PORT}`)
   
})
