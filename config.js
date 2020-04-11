
module.exports = {
  port : process.env.PORT || 3000,
  db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: 's3cr3t_t0k3n'
}
