const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       const conn = await mongoose.connect(process.env.MONGO_URI)  
    console.log(`helllooo.....`);
    } catch (err){
         console.log(err)
         process.exit(1);
    }
}

// const { MongoClient, ServerApiVersion } = require("mongodb");
// // Replace the placeholder with your Atlas connection string
// //const uri = "<connection string>";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_URI,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );
// const connectDB = async () => {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

module.exports = connectDB