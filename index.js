const express = require("express");
const fs = require("fs");

const app = express();

const tourRouter = require("./routes/tourRouter");

const userRouter = require("./routes/userRouter");

app.use(express.json());

const port = 8000;

app.listen(port, () => {
  console.log(`Listening to port......... ${port}`);
});

app.use("/api/v1/users", userRouter);

app.use("/api/v1/tours", tourRouter);
