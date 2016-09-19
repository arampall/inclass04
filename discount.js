var connection = require('./connection');
var FCM = require('fcm-push');

function Discount() {
	this.get = function(value, res) {
    	    connection.acquire(function(err, con) {
               con.query('Select * from results where region=?',[value], function(err, result) {
                  con.release();
                  res.send(JSON.stringify(result, null , 3));
                  var serverKey = 'AIzaSyD7CV4x8tfCIzc4Eag2yUkFBL5JDDeHXJ0';
                  var fcm = new FCM(serverKey);
                  var message = {
                       to: 'cm4-igxLCik:APA91bHZROCnLNBeuQ9UtwXjLRAyaAOnbScJfyiX4bnhqyOzgnNO6xpR39SZfAhhjk7QvqKuKVL_MTEE9XGz3-tJtgAQzNB030SDwFDg391vHA3t2DOJFz0m9s3INKayhQBJInJyAQ2A', // required

                       notification: {
                          title: 'Title of your push notification',
                          body: 'Body of your push notification'
                       }
                  };
                  
                  fcm.send(message, function(err, response){
                     if (err) {
                       console.log(err);
                     } else {
                       console.log("Successfully sent with response: ", response);
                     }
                  });


               });
            });
        };
}

module.exports = new Discount();
