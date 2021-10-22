require("dotenv").config();
const Express = require("express");
const app = Express();
const db = require("./db");


// Import middlewares as a bundle
// const middlewares = require("./middleware");

// Import controllers as a bundle
const controllers = require("./controllers");

// Parse the body of all requests as JSON
app.use(Express.json());
// app.use(middleware.CORS)
app.use("/user", controllers.User);

const resetDatabase = {force:true}
db.authenticate()

// add a resetDatabase inside the db.sync to drop all your tables if needed
// example:  .then(() => db.sync(resetDatabase))

  .then(() => db.sync())
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`[server]: App is listening on ${process.env.PORT}`);
    })
  )
  .catch((e) => {
    console.log("[server]: Server Crashed");
    console.log(e);
  });

  // app.listen(3000, () => {
  //   console.log("app is listening");
  // })

  // app.use('/test', function(req, res){
  //   res.send('This is a message from the test endpoint on the server!')
  // });