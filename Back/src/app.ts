import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT: string | number = process.env.PORT ?? 3002;

app.use(cors());
app.use(express.json());
app.use(routes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.tekcwp6.mongodb.net/transactions`;
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`),
    ),
  )
  .catch((error) => {
    throw error;
  });
