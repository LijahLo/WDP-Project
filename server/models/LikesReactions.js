const con = require("./db_connect") 
async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS LikesReactions (
      LikesReactionsID INT NOT NULL AUTO_INCREMENT,
      LoginID INT NOT NULL,
      RegisterID INT NOT NULL,
      USERID INT NOT NULL, 
      CONSTRAINT LikesReactionsPK PRIMARY KEY(LikesReactionsID)
    );`
  
    await con.query(sql)
  }
createTable() 

async function createLikesReactions(post) {
   let sql =
  `INSERT INTO LikesReactions (login, register, user)
   VALUES("${LikesReactions.login}", "${LikesReactions.register}", "${LikesReactions.user}")
 `  
 await con.query(sql)
 let createLikesReactions = await LikesReactions(LikesReactions)
 return LikesReactions
} 
  
async function updateLikesReactions(LikesReactions) {
    let sql = `
          UPDATE LikesReactions SET login="${LikesReactions.login}"
          WHERE LikesReactions="${LikesReactions.login}"
        `
        await con.query(sql)
        let updateLikesReactions = await LikesReactionsExists(LikesReactions)
        return updateLikesReactions[0]
} 
async function deleteLikesReactions(LikesReactions) {
    let sql = `
          DELETE from LikesReactions
          WHERE register="${LikesReactions.register}"
        `
        await con.query(sql)
} 
async function getLikesReactions(LikesReactions) {
    let sql = `
          SELECT user FROM LikesReactions
          WHERE user ="${LikesReactions.user}"
        `
        let user = await con.query(sql)
        return user[0]
}