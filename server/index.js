import mysql from "mysql2";
import express from "express";
import cors from "cors";

const sql_db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
});

const app = express();
//So we can POST json from client
app.use(express.json());

//Allows us to give access to SQL query from the React app due to SOP
app.use(cors());


//Outputs all phones for sale
app.get("/", (request, response) =>{
    const query = "SELECT * FROM phones";

    sql_db.query(query,(data, error) => {
        if(error) return response.json(error)
        return response.json(data)
    });
});

//Creates new phone
app.post("/phones", (request, response) => {
    const query = "INSERT INTO `test`.`phones` (`model`, `description`, `price`) VALUES (?)";
    const vals = [
        request.body.model,
        request.body.description,
        request.body.price
    ]

    sql_db.query(query,[vals], (error, data) => {
        if(error) return response.json(error)
        return response.json("Phone has been added.");
    });   
});

app.put("/updatePhone/:id", (request, response) => {
    const phoneId = request.params.id; 
    const query = "UPDATE `test`.`phones` SET `model` = ?, `description` = ?, `price` = ? WHERE (`id` = ?)"; 

    const vals = [
        request.body.model,
        request.body.description,
        request.body.price,
        phoneId
    ];

    sql_db.query(query, vals, (error, data) => {
        if (error) return response.json(error);
        return response.json("Phone has been updated successfully.");
    });
});

app.delete("/removePhone/:id", (request, response) => {
    const phoneId = request.params.id; 
    const query = "DELETE FROM `test`.`phones` WHERE (`id` = ?)"; 

    sql_db.query(query, [phoneId], (error, data) => {
        if (error) return response.json(error);
        return response.json("Phone has been deleted.");
    });
});

app.listen(8081, ()=>{
    console.log("Listening on port 8081.");
});