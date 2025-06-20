const express = require("express")
const User = require("../models/user")
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
export{fetchData};
router
.get('/getUsers', async (req, res) => {
    try {
      const users = await User.getAllUsers()
      res.send(users)
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/login', async (req, res) => {
    try {
      let user = await User.login(req.body)
      res.send({...user, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/register', async(req, res) => {
    try {
      let user = await User.register(req.body)
      res.send({...user, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .put('/update', async(req, res) => {
    try {
      let user = await User.updateEmail(req.body)
      res.send({...user, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .delete('/delete', async(req, res) => {
    try {
      let user = await User.deleteAccount(req.body)
      res.send({success: "We will miss you! :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  async function getUsers() {
    try {
      const users = await fetchData('/getUsers', {}, 'GET');
      console.log('Fetched Users:', users);
    } catch (error) {
      console.error('Error Fetching Users:', error);
    }
  }
  async function registerUser(userData) {
    try {
      const newUser = await fetchData('/register', userData, 'POST');
      console.log('User Registered:', newUser);
    } catch (error) {
      console.error('Error Registering User:', error);
    }
  }
  async function loginUser(loginData) {
    try {
      const loggedInUser = await fetchData('/login', loginData, 'POST');
      console.log('Logged In:', loggedInUser);
    } catch (error) {
      console.error('Error Logging In:', error);
    }
  }
  async function updateUserEmail(updatedData) {
    try {
      const updatedUser = await fetchData('/update', updatedData, 'PUT');
      console.log('User Email Updated:', updatedUser);
    } catch (error) {
      console.error('Error Updating Email:', error);
    }
  }
  async function deleteUser(deleteData) {
    try {
      const result = await fetchData('/delete', deleteData, 'DELETE');
      console.log('User Deleted:', result);
    } catch (error) {
      console.error('Error Deleting User:', error);
    }
  }
          
  module.exports = router