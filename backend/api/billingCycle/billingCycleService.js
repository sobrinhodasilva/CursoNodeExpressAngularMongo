
// o objeto BillingCycle  agrega o express e o mongoose e rest
const BillingCycle = require('./billingCycle')
const _ = require('lodash')

// cria os metodos para api restful automatiza toda integraçao
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//para retornar no update o valor novo e validar no update
BillingCycle.updateOptions({new:true, runValidators:true })

//middleware que trata os erros apos requisição
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req,res, next){
  //bundle é o objeto do node restful que tem os erros e o valor persistido
  const bundle = res.locals.bundle
  if(bundle.errors){
    var errors = parseErros(bundle.errors)
    res.status(500).json({errors})
  }else{
    //caso não haja erro vida q se segue
    next()
  }
}
//Recebe os erros trata para gerar uma string com os
function parseErros(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

// count quantidade de registros para ser usado na paginação
BillingCycle.route('count', function(req, res, next ){
  BillingCycle.count(function(error,value){
    if(error){
      res.status(500).json({errors:[error]})
    }else {
      res.json({value})
    }
  })
})


// exporta
module.exports = BillingCycle
