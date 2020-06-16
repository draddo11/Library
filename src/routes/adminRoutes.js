const  express = require("express");
const {mongoClient} = require("mongodb");
const debug =require("debug")("app:adminRoutes");
// const MongoClient = require("mongodb/lib/mongo_client");
const adminRouter = express.Router();


function router(nav){
    adminRouter.route('/')

    .get((req, res) =>{
        const url = "mongo://localhost:27017"
        const dbName="LibraryApp";

        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                debug("Connected correctly to server");
                const db= client.db(dbName);
                await db.collection

            }catch(err){

            }
        }());

        res.send('inserting books')
    })
    return adminRouter;
}



module.exports= router;