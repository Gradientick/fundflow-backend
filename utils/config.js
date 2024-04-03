import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.DB;
export default {
  PORT,
  DB,
};
