const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: 'https://nwease.auth0.com/.well-known/jwks.json'
    }),

    audience: 'tjamzxX55eSXdMqo03tpoe7yFjBUWzQN',
    issuer: 'https://nwease.auth0.com/',
    algorithums: ['RS256']
});