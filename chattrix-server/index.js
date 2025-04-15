import express from "express"
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import {app, server} from "./lib/socket.js"
import cors from "cors"
//const app = express();

app.use(express.json({limit: '10mb'}));

app.use(express.urlencoded({limit: '10mb', extended: true })); 
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes)
connectDB()
const PORT = process.env.PORT
server.listen(PORT, ()=>{
    console.log(`server is on going ${PORT}`)
   
})
