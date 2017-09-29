// recebe o server
const server = require('./config/server')

// conexao com o BD mongodb
require('./config/database')

// rebebe uma funcao do modulo routs  e o paramento vem do arquivo server
require('./config/routes')(server)
