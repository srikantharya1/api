const mongoose = require('mongoose')
//sagaranumaa
const scenarioSchema =  mongoose.Schema({
  Name: {
      type: "String",
      required: [true,'Please add a Name']
     },
  Age:{
      type: "Number",
      required: [true,'Please add a Age']
     },
  AccountNum:{
      type: "Number",
      required: [true,'Please add a Account Number']
     },
  Email:{
      type: "String",
      required: [true,'Please add a Email']
     }
  })

module.exports = mongoose.model('scenario',scenarioSchema)