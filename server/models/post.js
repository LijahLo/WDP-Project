const con = require("./db_connect") 
async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS Post (
      PostID INT NOT NULL AUTO_INCREMENT,
      LoginID INT NOT NULL,
      RegisterID INT NOT NULL,
      USERID INT NOT NULL, 
      CONSTRAINT PostPK PRIMARY KEY(PostID)
    );`
  
    await con.query(sql)
  }
createTable() 

async function createpost(post) {
   let sql =
  `INSERT INTO post (login, register, user)
   VALUES("${post.login}", "${post.register}", "${post.user}")
 `  
 await con.query(sql)
 let createpost = await post(post)
 return post
} 
  
async function updatepost(post) {
    let sql = `
          UPDATE post SET login="${post.login}"
          WHERE post="${post.login}"
        `
        await con.query(sql)
        let updatepost = await postExists(post)
        return updatepost[0]
} 
async function deletepost(post) {
    let sql = `
          DELETE from post
          WHERE register="${post.register}"
        `
        await con.query(sql)
} 
async function getpost(post) {
    let sql = `
          SELECT user FROM post
          WHERE user ="${post.user}"
        `
        let user = await con.query(sql)
        return user[0]
}