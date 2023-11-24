const router = require("express").Router();
require("dotenv").config();
const withAuth = require("../utils/auth");

const apiKey = process.env.API_KEY;

async function fetchAndDisplayArticles() {
  const url = `https://app.ticketmaster.com/discovery/v2/venues.json?apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data._embedded.venues;
}

router.get("/", withAuth, async (req, res) => {
    try {
      const result = await fetchAndDisplayArticles();
      res.render("homepage", { result, logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Checks if the user is logged in. If not, redirects to the login page. 
  router.get("/login", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  //Checks if the user is already logged in. If yes, redirects to homepage. If not, redirects to the signup page.
  router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/homepage");
      return;
    }
  
    res.render("signup");
  });

  module.exports = router;