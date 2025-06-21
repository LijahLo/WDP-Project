const express = require("express")
const LikesReactions = require("../models/LikesReactions")
const router = express.Router() 
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
    },
    body: methodType === 'GET' ? null : JSON.stringify(data)
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
}
router
.get('/getLikesReactions', async (req, res) => {
    try {
      const LikesReactions = await this.LikesReactions.getAllLikesReactions()
      res.send(LikesReactions)
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/login', async (req, res) => {
    try {
      let LikesReactions = await LikesReactions.LikesReactions(req.body)
      res.send({...post, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/register', async(req, res) => {
    try {
      let LikesReactions = await LikesReactions.LikesReactions(req.body)
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
  
  async function getLikesReactions() {
    try {
      const posts = await fetchData('/getLikesReactions', {}, 'GET');
      console.log('Fetched LikesReactions:', LikesReactions);
    } catch (error) {
      console.error('Error Fetching LikesReactions:', error);
    }
  }
  async function registerLikesReactions(LikesReactionsData) {
    try {
      const newLikesReactions = await fetchData('/register', LikesReactionsData, 'POST');
      console.log('LikesReactions Registered:', newLikesReactions);
    } catch (error) {
      console.error('Error Registering LikesReactions:', error);
    }
  }
  async function loginLikesReactions(loginLikesReactions) {
    try {
      const loggedInLikesReactions = await fetchData('/login', loginData, 'LikesReactions');
      console.log('Logged In:', loggedInLikesReactions);
    } catch (error) {
      console.error('Error Logging In:', error);
    }
  }
  async function updateLikesReactions(updatedLikesReactions) {
    try {
      const updatedLikesReactions = await fetchData('/update', updatedLikesReactions, 'PUT');
      console.log('Post Updated:', updatedLikesReactions);
    } catch (error) {
      console.error('Error Updating Post:', error);
    }
  }
  async function deleteLikesReactions(deleteData) {
    try {
      const result = await fetchData('/delete', deleteData, 'DELETE');
      console.log('LikesReactions Deleted:', result);
    } catch (error) {
      console.error('Error Deleting LikesReactions:', error);
    }
  }
 router 
.get("/all", async (req, res) => { /* … */ })
.post("/add", async (req, res) => { /* … */ });       

  module.exports = router