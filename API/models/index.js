const User = require ('./User')
const Tweets = require ('./Tweets')


// INNER JOIN User.id = Tweets.user_id
Tweets.belongsTo(User)


module.exports = {User,Tweets}