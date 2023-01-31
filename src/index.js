import App from "./app.js";
import { PORT } from './config.js'

console.log("Server running on PORT", PORT)
App.listen(PORT);
