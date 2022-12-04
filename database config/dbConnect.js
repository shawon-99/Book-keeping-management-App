const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      // 'mongodb+srv://Shawon:7QG0F51KoEOpOQnw@cluster0.pswyayd.mongodb.net/test',
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      // console.log("bal"),
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
