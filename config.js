module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://heroku_9kvhs1mj:k8tgtrrj832mkh80m6n67b7qhu@ds137508.mlab.com:37508/heroku_9kvhs1mj',
    SECRET_TOKEN: 'miclavetoken'
}