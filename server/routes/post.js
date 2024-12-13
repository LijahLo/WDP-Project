const express = require("express")
const post = require("../models/post")
const router = express.Router() 

.get('/getpost', async (req, res) => {
    try {
      const post = await this.post.getAllpost()
      res.send(post)
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/login', async (req, res) => {
    try {
      let post = await post.login(req.body)
      res.send({...post, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/register', async(req, res) => {
    try {
      let post = await post.register(req.body)
      res.send({...post, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .put('/update', async(req, res) => {
    try {
      let post = await post.updateEmail(req.body)
      res.send({...post, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .delete('/delete', async(req, res) => {
    try {
      let post = await post.deleteAccount(req.body)
      res.send({success: "You have been turned into a cursed spirit :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  module.exports = router