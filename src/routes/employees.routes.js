import { Router } from "express";
import { getEmployees, createEmployee, deleteEmployee, updateEmployee,searchEmployee } from "../controllers/employees.controller.js";


const router= Router();

router.get("/employees", getEmployees )

router.get("/employees/:id",searchEmployee)

router.post("/employees", createEmployee)

router.patch("/employees/:id", updateEmployee)

router.delete("/employees/:id", deleteEmployee)


export default router