

const fs = require("fs");

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
  // shows the index of all tours
  exports.getAllTours = (req, res) => {
    console.log("Listening to home page");
    res.json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  };
  
  // Create a Tour
  exports.createTour = (req, res) => {
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
  };
  
  // Show a tour with id
  exports.showTour = (req, res) => {
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
  };
  
  //Update store function
  exports.updateTour = (req, res) => {
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
  };
  
  exports.deleteTour = (req, res) => {
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
      data: null,
    });
  };