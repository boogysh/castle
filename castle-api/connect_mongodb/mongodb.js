const mongoose = require('mongoose');
//import mongoose from 'mongoose' === ERROR

mongoose.connect('mongodb+srv://boogysh:' + process.env.MONGO_DB_PASSWORD + 'cluster0.lanjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
,
//cluster0.lanjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0   --- new cluster ---
//@cluster0.m2vegey.mongodb.net/?retryWrites=true&w=majority   --- old cluster---
{ useNewUrlParser: true,
  useUnifiedTopology: true 
},)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//mongoose.set('strictQuery', false);
//   mongoose.set('strictQuery', true);
  // boogysh
  // Polobokkk 
  
