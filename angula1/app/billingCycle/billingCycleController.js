(function () {

  angular.module('primeiraApp').controller('BillingCycleCtrl',[
    '$http',
    'msgs' , //msgsFactory
    BillingCycleController
  ])

  function BillingCycleController($http, msgs){
    const vm = this
    const url = 'http://localhost:3003/api/billingCycles'

    //Atualiza após uma oprecão q altere os dados 
    vm.refresh = function () {
      $http.get(url, vm.billingCycle).then(
        function(response){
          vm.billingCycle = {}
          vm.billingCycles = response.data
        }
      )
    }

    vm.create = function (){
        $http.post(url, vm.billingCycle).then(
          function (response){
            vm.refresh()
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
