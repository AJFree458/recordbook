// import express
import express from "express";
const app = express();

// dotenv setup
import dotenv from "dotenv";
dotenv.config();

// express async errors module
import "express-async-errors";

// morgan for api information
import morgan from "morgan";

// packages for build
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import path from "path";

// import helmet from "helmet";
// import xss from "xss-clean";
// import mongoSanitize from "express-mongo-sanitize";

// database connection
import connectDB from "./db/connect.js";

// routers

// middleware imports

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// for build
// const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
// for build
// app.use(helmet());
// app.use(xss());
// app.use(mongoSanitize());

// define the base api route
// app.use("/api/v1/auth");

// Send every request to the React app
// only when ready to deploy
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })
// error middleware

// server port
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
