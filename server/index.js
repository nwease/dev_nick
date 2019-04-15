const express = require('express');
const next = require('next');
const routes = require('../routes');

// SERVICES
const auth = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const secretData = [
    {
        title: 'SecretData 1',
        description: 'Something useless'
    },
    {
        title: 'SecretData 2',
        description: 'More useless stuff'
    }
];

app.prepare().then(() => {
    const server = express();

    server.get('/api/v1/secret', auth.checkJWT, (req, res) => {
        return res.json(secretData)
    });

    server.get('/api/v1/siteowner', auth.checkJWT, auth.checkRole('siteOwner'), (req, res) => {
        return res.json(secretData)
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send({title: 'Unauthorized', detail: 'No Access'});
        }
    });

    server.use(handle).listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000')
    })
})
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1)
    });