import { app } from "./app"
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    app.listen(3000,()=>console.log("Server listening on port 3000"))
}).catch(error => console.log(error))
