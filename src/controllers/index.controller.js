import { Pool } from "../db.js"

export const getPing = async (req,res)=>  {
    const [result]= await Pool.query("SELECT 'PONG' AS result")
    res.json(result[0])
 }