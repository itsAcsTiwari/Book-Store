import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import cors from 'cors';
import userRoute from './route/user.route.js'


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

// Mount bookRoute router at the '/book' base path
app.use("/book", bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
