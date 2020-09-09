const express = require("express")
const { request, response } = require("express")
const app = express()

const configuration = require("./knexfile").development

const knex = require("knex")
const database = knex(configuration)

const {Model} = require("objection")
Model.knex(database)
class Dog extends Model{
    static tableName = "dog"
}

app.get("/", (request, response)=>{
    
    Dog.query()
        .then(dogs =>{
            response.json({dogs})

        })
})

app.listen(4000)