// middleware QUE LIBERA Acesso a requisiçoes CORs de outros servidores

module.exports = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT , PATCH, DELETE'),
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
  //Vida que se segue
  next()
}
