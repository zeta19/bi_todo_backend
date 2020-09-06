var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var MongoClient = require("mongodb").MongoClient;

var indexRouter = require("./routes/index");
var addTaskRouter = require("./routes/add");
var listTaskRouter = require("./routes/list");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var http = require("http");
var server = http.createServer(app);

var connection = MongoClient.connect("mongodb://localhost:27017/todoDb");

app.use((req, res, next) => {
  connection
    .then((client) => {
      req["db"] = client.db("todoDb");
      next();
    })
    .catch((err) => {
      next(err);
    });
});

app.use("/", indexRouter);
app.use("/add", addTaskRouter);
app.use("/list", listTaskRouter);

server.listen(5000, () => {
  console.log("listening on port 5000");
});

module.exports = app;
