var discount = require('./discount');
 
module.exports = {
  configure: function(app) {
    app.get('/', function(req, res) {
      	discount.get(req.query.region, res);
    });
  }
    
};
