    const express = require('express')
    require('dotenv').config()   
    const { MongoClient } = require('mongodb'); 
    const app = express()
    const port = 5000;
    const cors = require('cors');
    // middleware
    app.use(cors())
    app.use(express.json())
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c6mfh.mongodb.net/carMechanic?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // mongodb  atlas
    // pass :  41Jc1EbvVrCvbij0
    // name : node-react-server


    // node mongodb
    async function run(){

    try{ 
        await client.connect(); 
        const database = client.db("carMechanic"); 
        const servicesCollection = database.collection("services"); 
        // POST API
        app.post('/services', async (req, res) => {
            const service = req.body
             console.log('hitting the post', service)
              // const service = {
            //     "name": "ENGINE DIAGNOSTIC",
            //     "price": "300",
            //     "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
            //     "img": "https://i.ibb.co/dGDkr4v/1.jpg"
            // };
            // const result = await servicesCollection.insertOne(service); 
            res.send('hitted post')
    }) 
    }
    finally{
        // await client.close();
    }
    
    }   
    run().catch(console.dir); 

    app.get('/', (req, res)=> {
            res.send('hello to response')
    }) 
    app.listen(port, ()=> {
    console.log('runnig the port', port )
    })


