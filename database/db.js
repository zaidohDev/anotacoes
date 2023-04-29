const mongoose = require('mongoose');

const conncectToDb = () => {
  mongoose.connect(
    "mongodb+srv://zaidohdev:aa000000@task.xpo2s5o.mongodb.net/?retryWrites=true&w=majority",
    {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => console.log("Db connected")
  ).catch(err => console.log(err));
};

module.exports = conncectToDb;