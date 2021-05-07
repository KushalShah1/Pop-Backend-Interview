import express from "express"
import * as dotenv from "dotenv";
import cors from "cors"
import {test_request} from './src/handlers'
dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

 app.use(cors());
 app.use(express.json());

 app.use("/test",test_request);


 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
