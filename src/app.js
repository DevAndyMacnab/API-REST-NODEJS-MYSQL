import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT,DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER}from './config.js'


const App = express();


//MiddleWare
App.use(express.json());

App.use("/api", employeesRoutes)
App.use("/api", indexRoutes)
App.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" })
})

export default App;