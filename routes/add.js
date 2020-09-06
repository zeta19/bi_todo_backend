var express = require("express");
var router = express.Router();

router.post("/", async (req, res, next) => {
  let data = req.body;
  console.log(data);

  if (!data) {
    return res.json({ error: true, message: "Expected some data" });
  }

  try {
    let insertObj = {
      "task name": data["task_name"],
      "task description": data["task_description"],
      creator: data["creator"],
      createdAt: new Date(),
    };

    let dbres = await req.db.collection("tasks").insertOne(insertObj);

    return res.json({ error: false, message: "Task added successfully" });
  } catch (ex) {
    console.log(ex);
    return res.json({ error: true, message: "Something went wrong" });
  }
});

module.exports = router;
