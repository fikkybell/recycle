const Data = require("../models/Data");


const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newData = new Data(req.body);

  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// GET USER Donation
router.get("/find/:userId",  async (req, res) => {
  try {
    const data = await Data.find({ userId: req.params.userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL DONATIONS

router.get("/getAll", async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;