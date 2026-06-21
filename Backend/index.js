const express = require('express');
const cors = require('cors')
const products = require('./products.json')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express()
const port = 3000

// middleware

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://kamalandSons:0zBu0v199UV0uW5g@iiuc.ewdvdsn.mongodb.net/?appName=IIUC";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {

    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const kamalDB = client.db("kamalDB");
        const productCollection = kamalDB.collection("Products");
        const OrderCollection = kamalDB.collection('Order')


        app.post('/products', async (req, res) => {
            const data = req.body;
            const result = await productCollection.insertOne(data);
            res.send(result)
        })


        app.post('/products/order', async (req, res) => {
            const data = req.body;
            const result = await OrderCollection.insertOne(data);
            res.send(result)

        })


        app.get('/products', async (req, res) => {

            const cursor = productCollection.find();
            const allValues = await cursor.toArray();
            res.send(allValues)


        })


        app.get('/products/:id', async (req, res) => {

            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const product = await productCollection.findOne(query);
            res.send(product)


        })

        app.get('/products/order/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const product = await productCollection.findOne(query);
            res.send(product)


        })

    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);





// kamalandSons
// 0zBu0v199UV0uW5g



app.get('/', (req, res) => {

    res.send('Kamal and Sons Server Running')


})



app.listen(port, () => {
    console.log(`Running Kamal And Sons Server Successfully on Port Number ${port}`)
})