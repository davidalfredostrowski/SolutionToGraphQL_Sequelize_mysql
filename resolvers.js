
ubuntu@ip-172-31-33-160:~/graphbook/graphql$ cat resolvers.js
const {sequelize }  = require('sequelize');

const {
  userAls
} = require('../models');

const Query = {
  getUsers: async () => {
    try {
      const users = await userAls.findAll();
      return users;
    } catch (err) {
      console.log(err);
    }
  }
}



module.exports = { Query }
