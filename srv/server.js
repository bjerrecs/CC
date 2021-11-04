const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();
const PORT = 4000;
const dotenv = require("dotenv")
dotenv.config()

const Company = require("./models/companies");
const Location = require("./models/warehouse/location");
const Access = require("./models/client/access");
const Items = require("./models/warehouse/item")

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cc.aslvc.mongodb.net/CC?retryWrites=true&w=majority`

var bodyParser = require('body-parser');
const { request } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
.then( () => {
    //console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})

app.get("/api/new-customer", (req, res) => {
    Company.find().exec(function(err, companies){
        res.json(companies.name)
    })
});

app.get('/api/customers',(req,res) => {
    Company.find().exec(function (err, Company) {
            res.json(Company);
    })
});

app.get('/api/client/access',(req,res) => {
    Access.find({clientid: req.query.clientid}).exec(function (err, Access) {
            res.json(Access);
    })
});
app.post('/api/client/access',(req,res) => {
    Access.find({clientid: req.query.clientid}).exec(function (err, Access) {
            res.json(Access);
    })
});

app.get('/api/customer',(req,res) => {
    Company.findOne({_id: req.query.id}).exec(function (err, Company) {
            res.json(Company);
    })
});

app.get('/api/warehouse/items',(req,res) => {
    Items.find().exec(function (err, Items) {
            res.json(Items);
    })
});

app.get('/api/warehouse/location',(req,res) => {
    Location.find().exec(function (err, Location) {
            res.json(Location);
    })
});


app.post("/api/customers", (req, res) => {
    let data = req.body;
    let createCustomer = new newCustomer(data);
    Company.create(createCustomer, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            //Redirects to the newly created RFC
            res.redirect("http://localhost:3000/customers");
        }
    })
});

app.post("/api/warehouse/location", (req, res) => {
    let data = req.body;
    let createLocation = new newLocation(data);
    Location.create(createLocation, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            console.log(data.name)

            //Redirects to the newly created RFC
            res.redirect("http://localhost:3000/warehouse/location");
        }
    })
});
app.put("/api/warehouse/location", (req, res) => {
    let data = req.body;
    let putLocation = new updateLocation(data);
    Location.put(putLocation, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            console.log(data.name)

            //Redirects to the newly created RFC
            res.redirect("http://localhost:3000/warehouse/location");
        }
    })
});

// Warehouse add new item
app.post("/api/warehouse/item", (req, res) => {
    let data = req.body;
    let CreateNewItem = new newItem(data);
    Items.create(CreateNewItem, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.redirect("http://localhost:3000/warehouse");
        }
    })
});


function newCustomer(data) {
    this.fullname = data.fullname
    this.shortname = data.shortname
    this.device42id = data.device42id
    this.freshdeskid = data.freshdeskid
    this.freshdesklink = data.freshdesklink
    this.servicedesktier = data.servicedesktier
}

function newLocation(data) {
    this.name = data.name
}

function updateLocation(data) {
    this.name = data.name
    this.newname = data.newname
}

function newItem(data) {
    this.name = data.name
    this.location = data.location
    this.assetid = data.assetid
}

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});