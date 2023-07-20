import { MongoClient, ServerApiVersion } from 'mongodb';

let db
/**
 * @type {import('mongodb').Db}
 * @returns 
 */
const DbConnect = async () => {
    if (db) return db;
    try {
        // const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.sat5t4p.mongodb.net/?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        // Send a ping to confirm a successful connection
        db = client.db("easy-shop")
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return db;

    } catch (error) {
        console.log(error.message)
    }
};

export default DbConnect;