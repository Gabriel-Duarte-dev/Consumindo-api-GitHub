import express from "express";
import { resolve } from "path";

const app = express();

app.use("/", express.static(resolve(__dirname, "./dist")));

app.listen("http://localhost:4000", (err) => {
  if (err) return console.log(err);

  console.log("Tudo nos conformes");
});
