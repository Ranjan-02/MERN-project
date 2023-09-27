// Bring express

import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//asign express

const app = express();

dotenv.config()

app.get("/", (req, resp) => {
    resp.send({
        success: true
    })
})

// PORT 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(colors.bgYellow.black(`server running ${process.env.MODE} port no ${PORT}`));
})