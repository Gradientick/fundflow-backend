import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.DB;
const SECRET = process.env.SECRET;
export default {
  PORT,
  DB,
  SECRET,
};
