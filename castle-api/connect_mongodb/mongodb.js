const mongoose = require("mongoose");
//import mongoose from 'mongoose' === ERROR
//
// Need to set mongoose.set("strictQuery", true); to escape the warning message in console
// this change is for mongoDB 7
mongoose.set("strictQuery", true);
//mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://boogysh:" +
      process.env.MONGO_DB_PASSWORD +
      "@cluster0.lanjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    //@cluster0.lanjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0   --- new cluster ---
    //@cluster0.m2vegey.mongodb.net/?retryWrites=true&w=majority   --- old cluster---
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //keepAlive: true,       //Connexion à MongoDB échouée !
      //autoReconnect: true,   // Connexion à MongoDB échouée !
    }
    //keepAlive: true,
    //keepAliveInitialDelay: 300000, // 5 minutes
    //serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    //socketTimeoutMS: 45000, // Close sockets after 45 seconds
    //autoReconnect: true,
    //reconnectTries: Number.MAX_VALUE, // Keep retrying
    //reconnectInterval: 5000 // Retry every 5 seconds
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// boogysh
// Polobokkk
