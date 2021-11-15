<div align="center">
  <img src="./public/radar.svg" width="100" alt="CC logo" />
</div>

# CC - Control Center
A MSP Client management tool used for managing processes, access information, passwords, guide and know-how and links to common recources.

## Project Goals
* Manage clients/ companies
* Manage process documentaion
* Manage/ link to password store
* Simple warehouse module
* Send Emails (via MS365)

## Project technologies/ Libs
* React
* React Router
* React Bootstrap
* mongodb
* mongoose
* Auth0 (eventialuly)

<img src="./.githubcontent/show.gif" width="750" alt="CC preview" />

## Setup project
Create a .env file in root of /srv

Add the following two lines and add username and password for your db.

DB_USERNAME=

DB_PASSWORD=

And on line 14 of server.js change the MongoDB Atlas url to your DB