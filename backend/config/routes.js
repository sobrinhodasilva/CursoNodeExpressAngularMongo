const express = require('express')

// O paramento server virá do arquivo server.js
module.exports = function(server){
  // API router
  const router = express.Router()
  server.use('/api', router)

  //rota da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  // Registra a Url raiz billingCycles
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
