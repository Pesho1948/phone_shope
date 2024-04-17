import mysql from "mysql2"
import express from "express"

const sql_db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
})

const app = express()
// check GET request
app.get("/", (request, response) =>{
    response.json("Successful GET request.")
})

app.get("/phones", (request, response) =>{
    const query = "SELECT * FROM phones"

    sql_db.query(query,(data, error)=>{
        if(error) return response.json(error)
        return response.json(data)
    })
})
app.listen(8081, ()=>{
    console.log("Listening on port 8081.")
})