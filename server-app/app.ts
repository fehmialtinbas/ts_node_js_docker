import express from "express";

const app = express();
const port = 8088;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const x: string = "Ben Bunu Yaparım";
console.log(x);
