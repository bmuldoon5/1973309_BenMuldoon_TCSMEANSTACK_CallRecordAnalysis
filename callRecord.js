const fs = require('fs');
//let mongoose = require("mongoose");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

//store in array
//let records = JSON.parse(fs.readFileSync("data.json").toString());

/*
let mongodb = require("mongodb"); //load module
let mongoClient = mongodb.MongoClient; //created the reference
*/

//put data in a variable
//let data = fs.readFileSync('data.json');
//let empJson = JSON.parse(data);

let data = fs.readFileSync('data.json');
let empJSON = JSON.parse(data);

const options = { ordered: true };

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    //server
    let db = client.db("meanstack"); //declaring database


        /*
        if (!err1) {
            console.log("connected successfully")
        }
        else {
            console.log("Error " + err1);
        }
        */


        //let empData = data.toString();
        //let empJson = JSON.parse(empData);


        //client.close();


        //let db = mongoose.connection;

        /*
        db.once("open", () => {
            let theSchema = mongoose.Schema({
                __id: Number,
                source: String,
                destination: String,
                sourceLocation: String,
                destinationLocation: String,
                callDuration: String,
                roaming: String,
                callCharge: String
            })
        })
        */

        //creating model using schema
        db.collection('meanstackkk').insertMany(empJSON, (err1, result) => {


            if (!err1) {
                console.log(result)

            }
            else {
                console.log(err1)
            }
            client.close();

        });
        
    });

