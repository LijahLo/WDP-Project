const express = require("express")
const app = express()
const path = require('path')

app.use(express.json()); // parses JSON bodies

const userRoutes = require("./server/routes/user")
const postRoutes = require("./server/routes/post")

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/public/register.html")))

app.use('/users', userRoutes)
// app.use('/recipe', recipeRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started!! Listening on port ${PORT}!!! :)`))