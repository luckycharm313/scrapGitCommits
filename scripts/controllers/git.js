
var moment = require('moment');
var common = require('../../config/common');
var axios = require('axios');

module.exports = { 
  getCommits: async function(req, res, next) {
    try {
      var result = await axios.get('https://api.github.com/repos/luckycharm313/scrapGitCommits/commits/master')
      if(result.status == 200) {
        return common.send(res, 200, result.data.commit, 'Successfully.');  
      } else {
        return common.send(res, 300, '', 'Fetch error.');  
      }
    } catch (err) {
      return common.send(res, 400, '', 'Exception Error');
    }
  },  
}