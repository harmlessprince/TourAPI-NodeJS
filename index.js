const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const port = 8000;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.listen(port, () => {
  console.log(`Listening to port......... ${port}`);
});

// Get all tours in the json file
app.get("/api/v1/tours", (req, res) => {
  console.log("Listening to home page");
  res.json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

// Create a new tours
app.post("/api/v1/tours", (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        console.log("error ecountered");
      } else {
        res.json({
          message: "success",
          data: {
            tours: newTour,
          },
        });
      }
    }
  );
});

// find a tour in the json file

app.get("/api/v1/tours/:id", (req, res) => {
  // req.params //returns an object {id: "5"}

  let tourId = parseInt(req.params.id); //converts id to integer

  //   console.log(tourId);

  const tour = tours.find((el) => el.id === tourId);
  if (tour) {
    res.json({
      status: "success",
      data: {
        tour,
      },
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Invalid ID supplied",
    });
  }
});

app.patch("/api/v1/tours/:id", (req, res) => {
  // req.params //returns an object {id: "5"}

  let tourId = parseInt(req.params.id); //converts id to integer

  if (tourId > tours.length) {
    return res.status(404).json({
      status: "error",
      message: "ID not found",
    });
  }
  res.status(202).json({
    status: "success",
    message: "Data Updatd",
  });
});



app.delete("/api/v1/tours/:id", (req, res) => {
    // req.params //returns an object {id: "5"}
  
    let tourId = parseInt(req.params.id); //converts id to integer
  
    if (tourId > tours.length) {
      return res.status(404).json({
        status: "error",
        message: "ID not found",
      });
    }
    res.status(204).json({
      status: "success",
      message: "Data deleted",
      data: null
    });
  });
  