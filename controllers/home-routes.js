
  
  //Checks if the user is logged in. If not, redirects to the login page. 
  router.get("/login", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  //Checks if the user is already logged in. If not, redirects to the signup page.
  router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });