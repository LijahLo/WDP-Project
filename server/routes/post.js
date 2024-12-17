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
  
  async function getPosts() {
    try {
      const posts = await fetchData('/getpost', {}, 'GET');
      console.log('Fetched Posts:', posts);
    } catch (error) {
      console.error('Error Fetching Posts:', error);
    }
  }
  async function registerPost(postData) {
    try {
      const newPost = await fetchData('/register', postData, 'POST');
      console.log('Post Registered:', newPost);
    } catch (error) {
      console.error('Error Registering Post:', error);
    }
  }
  async function loginPost(loginData) {
    try {
      const loggedInPost = await fetchData('/login', loginData, 'POST');
      console.log('Logged In:', loggedInPost);
    } catch (error) {
      console.error('Error Logging In:', error);
    }
  }
  async function updatePost(updatedData) {
    try {
      const updatedPost = await fetchData('/update', updatedData, 'PUT');
      console.log('Post Updated:', updatedPost);
    } catch (error) {
      console.error('Error Updating Post:', error);
    }
  }
  async function deletePost(deleteData) {
    try {
      const result = await fetchData('/delete', deleteData, 'DELETE');
      console.log('Post Deleted:', result);
    } catch (error) {
      console.error('Error Deleting Post:', error);
    }
  }
          

  module.exports = router