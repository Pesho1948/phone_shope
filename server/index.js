import mysql from "mysql2"
import express from "express"

const sql_db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
})

const app = express()
//So we can POST json from client
app.use(express.json())

// gets all phones for sale
app.get("/", (request, response) =>{
    const query = "SELECT * FROM phones"

    sql_db.query(query,(data, error) => {
        if(error) return response.json(error)
        return response.json(data)
    })
})

app.post("/phones", (request, response) => {
    const query = "INSERT INTO `test`.`phones` (`model`, `description`, `price`) VALUES (?)"
    const vals = [
        request.body.model,
        request.body.description,
        request.body.price
    ]

    sql_db.query(query,[vals], (error, data) => {
        if(error) return response.json(error)
        return response.json("Phone added")
    })    

})

app.listen(8081, ()=>{
    console.log("Listening on port 8081.")
})