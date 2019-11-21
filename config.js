module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://easynote123:easynote123@ds137508.mlab.com:37508/heroku_9kvhs1mj',
    SECRET_TOKEN: 'miclavetoken'
}