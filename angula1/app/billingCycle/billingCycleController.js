(function () {

  angular.module('primeiraApp').controller('BillingCycleCtrl',[
    '$http',
    'msgs' , //msgsFactory
    BillingCycleController
  ])

  function BillingCycleController($http, msgs){
    const vm = this

    vm.create = function (){
        const url = 'http://localhost:3003/api/billingCycles'
        $http.post(url, vm.billingCycle).then(
          function (response){
            vm.billingCycle ={}
            //console.log('POst Sucesso! ')
            msgs.addSuccess('Operação realizada com Sucesso!!')
          },
          function (response) {
            msgs.addError(response.data.errors)
          }
      )
    }
  }

})()
