const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const myPricePlan = require("./phonebill");
const pgp = require("pg-promise")();
const app = express();

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("index")
})

app.post("/User", function(req, res){
    
})

app.get("/calc_bill", function(req, res){
    res.render("calc_bill")

})

app.post("/calc_bill", function(req, res){
  res.render("calc_bill")
})

app.get("/price_plans", function(req, res){

  res.render("price_plans")
})
app.get("/price_plans/:id", function(req, res){

  res.render("price_plans/:id")
})

app.get("/link_user", function(req, res){

  res.render("link_user")
})

app.post("/link_user", function(req, res){

  res.render("price_plans/:id")
})

const PORT = process.env.PORT || 1600;
app.listen(PORT, function () {
  console.log("App started at port ", PORT);
});