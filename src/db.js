import { createPool } from 'mysql2/promise';
import {
    DB_DATABASE
    , DB_HOST
    , DB_PASSWORD,
    DB_PORT,
    DB_USER
} from './config.js';

//Este comando sirve para conectarme a la base de datos, este espera todos los datos necesarios para conectarse

export const Pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

