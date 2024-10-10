import e from "express";
import "dotenv/config";
import "./config/db.js"
import workshop_router from "./routers/workshop_router.js";
import vehicle_router from "./routers/vehicle_router.js";
import maintenance_router from "./routers/maintenance_router.js";

const app = e();

app.use(e.json());

app.use("/workshop", workshop_router);
app.use("/vehicle", vehicle_router);
app.use("/maintenance", maintenance_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));