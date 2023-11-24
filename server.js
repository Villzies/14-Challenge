const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helper");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);