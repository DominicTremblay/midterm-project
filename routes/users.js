/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = ({ getUsers, addUser }) => {
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => {
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    // creating a new user



    // extract the info from the request

    const {name, email, password} = req.body;

    console.log(name, email, password);

    // check if the user exists - midterm? not necessary

    // save the user in the db

    addUser(name, email, password)
      .then(user => {
        res.json(user);
      })
      .catch(err => console.log(err));


    // single page app => redirect on the server will not work!
    // redirect

  });

  return router;
};
