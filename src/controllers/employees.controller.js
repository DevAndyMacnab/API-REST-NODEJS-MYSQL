import { Pool } from '../db.js'


export const getEmployees = async (req, res) => {
    try{
        const [rows] = await Pool.query('SELECT * FROM employee')
        res.json(rows)   
    } catch(error){
        return res.status(500).json({
            message:"Algo ha salido mal"
        })
    }

}

export const searchEmployee = async (req, res) => {

    const [rows] = await Pool.query("SELECT * FROM employee WHERE id=?", [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: "El empleado no fue encontrado dentro de la base de datos"
    })

    res.json(rows[0])
}


export const createEmployee = async (req, res) => {

    //Esta constante recibe los datos ofrecidos por el usuario por medio de un objeto JSON
    const { name, salary } = req.body
    const [rows] = await Pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}


export const deleteEmployee = async (req, res) => {
    const [result] = await Pool.query('DELETE FROM employee WHERE id=?', [req.params.id])
    if (result.affectedRows === 0) return res.status(404).json({ message: "No se ha encontrado ese empleado para eliminar" })
    res.sendStatus(204)
}

export const updateEmployee = async (req, res) => {
    //Esto es equivalente a escribir esto: (const id = req.params.id)
    const { id } = req.params
    const { name, salary } = req.body;
    const [result] = await Pool.query('UPDATE employee SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?', [name, salary, id])

    if (result.affectedRows == 0) return res.status(404).json({ message: "El empleado que desea actualizar, no se encuentra dentro de la base de datos" })

    //res.status(202).json({ message: "Empleado actualizado con éxito" })
   const [rows]= await Pool.query("SELECT * FROM employee WHERE id=?", [id])
    res.json(rows[0])

}
