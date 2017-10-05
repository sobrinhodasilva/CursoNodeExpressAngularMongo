// middleware QUE LIBERA Acesso a requisiçoes de outros servidores

module.exports = function(req, res, next){
  rest.header('Access-Control-Allow-Origin', '*')
  rest.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT , PATCH, DELETE'),
  rest.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
  //Vida que se segue
  next()
}
