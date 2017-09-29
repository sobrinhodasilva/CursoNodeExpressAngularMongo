
// o objeto BillingCycle  agrega o express e o mongoose e rest
const BillingCycle = require('./billingCycle')

// cria os metodos para api restful automatiza toda integraçao
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//para retornar no update o valor novo e validar no update
BillingCycle.updateOptions({new:true, runValidators:true })

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
