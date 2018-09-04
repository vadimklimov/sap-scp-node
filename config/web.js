const bodyParser = require('body-parser');

function configureWebServer(app) {
    app.disable('x-powered-by');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

module.exports = configureWebServer;