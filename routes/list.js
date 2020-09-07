var express = require("express");
var router = express.Router();

//route to fetch all the currently active tasks
router.get("/", async (req, res, next) => {
  try {
    let tasks = await req.db.collection("tasks").find({}).toArray();
    return res.json({ error: false, tasks: tasks });
  } catch (ex) {
    console.log(ex);
    return res.json({ error: true, message: "Something went wrong!" });
  }
});

module.exports = router;
