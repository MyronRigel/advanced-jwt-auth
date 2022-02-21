module.exports.newUserMiddleware = require('./users/newUser.middleware')
module.exports.loginUserMiddleware = require('./users/loginUser.middleware')
module.exports.isUserExist = require('./users/isUserExist.middleware')
module.exports.roleMiddleware = require('./users/role.middleware')
module.exports.isAccessTokenMiddleware = require('./tokens/isAccessToken.middleware')
module.exports.isRefreshTokenMiddleware = require('./tokens/isRefreshToken.middleware')