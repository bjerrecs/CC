const express = require("express");
const path = require('path')
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 4000;
var http = require('http');

const favicon = require('express-favicon');
const mongoose = require('mongoose')
const cors = require("cors");
app.use(cors());
require('dotenv').config();
var nodeoutlook = require('nodejs-nodemailer-outlook')

const Company = require("./srv/models/companies");
const Location = require("./srv/models/warehouse/location");
const Access = require("./srv/models/client/access");
const Items = require("./srv/models/warehouse/item")
const MaintenanceWindow = require("./srv/models/maintenance/model")

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cc.aslvc.mongodb.net/CC?retryWrites=true&w=majority`

var bodyParser = require('body-parser');
const { request } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

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

            //Redirects to the newly created RFC
            res.redirect("http://localhost:3000/warehouse/location");
        }
    })
});
app.delete('/api/warehouse/location/:id', (req, res) => {
    Location.remove({ _id: req.params.id }, (err, result) => {
      if (err) return console.log(err)
      console.log(req.body)
      res.redirect('http://localhost:3000/warehouse')
    })
  })
app.get("/api/warehouse/item/delete/", (req, res) => {
    let data = req.body;
    let CreateNewItem = new newItem(data);
    Items.deleteOne({ id_ : CreateNewItem.id }, function(err, result) {
        if (err) {
            res.send(err);
          } else {
            res.redirect("http://localhost:3000/warehouse");
          }
    })
});

app.delete('/api/warehouse/item/:id', (req, res) => {
    Items.remove({ _id: req.params.id }, (err, result) => {
      if (err) return console.log(err)
      console.log(req.body)
      res.redirect('http://localhost:3000/warehouse')
    })
  })

// DYMO
app.post("/api/dymo/test", (req, res) => {

    res.send('Hello World!')


    const Dymo = require('dymojs'),
	   dymo = new Dymo();

    dymo.print('DYMO LabelWriter 450', labelXml);

    var labelXml = `
    <?xml version="1.0" encoding="utf-8"?>
    <DieCutLabel Version="8.0" Units="twips" MediaType="Default">
      <PaperOrientation>Portrait</PaperOrientation>
      <Id>Small30334</Id>
      <PaperName>30334 2-1/4 in x 1-1/4 in</PaperName>
      <DrawCommands>
        <RoundRectangle X="0" Y="0" Width="3240" Height="1800" Rx="270" Ry="270"/>
      </DrawCommands>
      <ObjectInfo>
        <TextObject>
          <Name>TEXT</Name>
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
          <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
          <LinkedObjectName></LinkedObjectName>
          <Rotation>Rotation0</Rotation>
          <IsMirrored>False</IsMirrored>
          <IsVariable>False</IsVariable>
          <HorizontalAlignment>Center</HorizontalAlignment>
          <VerticalAlignment>Middle</VerticalAlignment>
          <TextFitMode>AlwaysFit</TextFitMode>
          <UseFullFontHeight>True</UseFullFontHeight>
          <Verticalized>False</Verticalized>
          <StyledText>
            <Element>
              <String>Hello World</String>
              <Attributes>
                <Font Family="Helvetica" Size="13" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              </Attributes>
            </Element>
          </StyledText>
        </TextObject>
        <Bounds X="57.6" Y="86.39999" Width="3124.8" Height="1627.2"/>
      </ObjectInfo>
    </DieCutLabel>    
        `;
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

//SMS
app.get('/api/sms',(req,res) => {
    const config = {
        headers: { Authorization: `Bearer ` + process.env.TELAVOX_KEY }
    };
    
    axios.get('https://api.telavox.se/sms/4551757001?message=hello')
    .then(response => {
        console.log(response.json);
        // console.log(response.data);
        res.send(response.json);
    })
    .catch(error => {
        console.log(error);
    });

});

// Maintenance 

app.get('/api/maintenance',(req,res) => {
    MaintenanceWindow.find().exec(function (err, MaintenanceWindow) {
            res.json(MaintenanceWindow);
    })
});

app.post("/api/maintenance/schedule", (req, res) => {
    let {reason,type,internal,startdate,enddate,starttime,endtime} = req.body
    let data = req.body;
    let CreateNewMaintenanceWindow = new newMaintenanceWindow(data);
    MaintenanceWindow.create(CreateNewMaintenanceWindow, function(err, result) {
        if(err) {
            res.send(err);
        }
    })
});

app.post("/api/send_mail/maintenance", cors(), (req, res) => {
    let {text,mailTo,maintenanceReason,maintenanceStartDate,maintenanceStartTime,maintenanceEndDate,maintenanceEndTime} = req.body
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.MAIL_AUTH_USER,
            pass: process.env.MAIL_AUTH_PASS
        },
        from: process.env.MAIL_AUTH_USER,
        to: mailTo,
        subject: 'Announcement of planned maintenance window Tuesday Nov 9th',
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>w3newbie HTML Email</title>
            <style type="text/css">
                body {
                    Margin: 0;
                    padding: 0;
                    height: 100%;
                }
                table {
                    color: #2b2b2b;
                    background-color: #f6f9fc;
                    font-family: Helvetica, sans-serif;
                    height: 100%;
                }
                .header {
                    padding: 5px;
                    width: 50%;
                    background-color: #404577;
                    color: #fff;
                    justify-content: center;
                    justify-self: center;
                }
                .text {
                    padding: 5px;
                    width: 50%;
                }
                .text-center {
                    text-align: center;
                }
                .textcontainer {
                    word-wrap:break-word;
                }
                @media screen and (max-width: 600px) { 
                }
                @media screen and (max-width: 400px) { 
                }
            </style>
        </head>
        <body>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="border-collapse:collapse; padding:0; margin:0px;" bgcolor="#ffffff">
            <tr valign="top">
              <td align="center">
                  <!-- Body Content -->
                  <table border="0" cellpadding="0" cellspacing="0" width="750" style="border-collapse:collapse; padding:0; margin:0px;">
                      <tr valign="top">
                          <td align="center" class="header">
                                <h1 class="text-center">Announcement of planned <br /> maintenance window</h1>
                          </td>
                      </tr>
                      <tr valign="top">
                        <td align="center">
                            <div class="text">
                                <p>MSP hereby announces a change for.</p>
                                <p>Start of Change: ${maintenanceStartDate} ${maintenanceStartTime} CEST</p>
                                <p>End of change: ${maintenanceEndDate} ${maintenanceEndTime} CEST</p>
                                <p><b>Reason for change activity:</b></p>
                                <p class="textcontainer">${maintenanceReason}</p>
                                
                                <p>Estimated downtime is up to 6 hours for services not protected</p>
        
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <p class="textcontainer">
                                Please reply to this email should you have any inquiries regarding this change. <br />
                                If no feedback has been received from you within 5 days,<br /> 
                                the change is automatically regarded as accepted.
                            </p>
                        </td>
                    </tr>
                  </table>
              </td>
            </tr>
          </table>
        
        
        </body>
        </html>
        `,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    })
})

/////////////////////////////////////////////////
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
/////////////////////////////////////////////////

function newMaintenanceWindow(data) {
    this.type = data.type
    this.reason = data.reason
    this.internal = data.internal
    this.startdate = data.startdate
    this.enddate = data.enddate
    this.starttime = data.starttime
    this.endtime = data.endtime
    this.status = data.status
}

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
    this.addedby = data.addedby
}

app.listen(process.env.PORT || PORT, function() {
  console.log("Server is running on Port: " + PORT);
});