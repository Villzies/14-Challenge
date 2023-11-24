const router = require("express").Router();
const { User } = require('../../models');

//New user sign up
router.post("/", async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.username = newUser.username;
        req.session.logged_in = true;
  
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //Existing user signin
  router.post('/login', async (req, res) => {
      try {
          const userData = await User.findOne({ where: { username: req.body.username } });
     //If the username does not exist/doesn't match, throws an error.
          if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
     //If the password does not exist/doesn't match, throws an error.
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
    });
  
  //Logout
  router.post('/logout', (req, res) => {
      if (req.session.logged_in) {
          req.session.destroy(() => {
          res.status(204).end();
      });
      } else {
          res.status(404).end();
      }
  });
  module.exports = router;