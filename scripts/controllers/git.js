
var moment = require('moment');
var common = require('../../config/common');
var axios = require('axios');

module.exports = { 
  getCommits: async function(req, res, next) {
    console.log('sss')
    try {
      // var result = await axios.get('https://api.github.com/users/luckycharm313')
      var result = await axios.get('https://api.github.com/repos/luckycharm313/scrapGitCommits/commits/')
      console.log({result});
    } catch (err) {
      console.log(err)
      return common.send(res, 400, '', 'Exception Error');
    }
  },  
}