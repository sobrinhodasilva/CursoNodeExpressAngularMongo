(function () {

  angular.module('primeiraApp').controller('BillingCycleCtrl',[
    '$http',
    'msgs' , //msgsFactory
    'tabs' , //TabsFactory
    BillingCycleController
  ])

  function BillingCycleController($http, msgs, tabs){
    const vm = this
    const url = 'http://localhost:3003/api/billingCycles'

    //Atualiza após uma oprecão q altere os dados
    vm.refresh = function () {
      $http.get(url, vm.billingCycle).then(
        function(response){
          vm.billingCycle = {}
          vm.billingCycles = response.data

          //mostrar as abas necessarias visiveis
          tabs.show(vm, {tabList:true, tabCreate:true}) 
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

    //Chamar a funçao refresh sempre q acessar o controller
    vm.refresh()
  }
})()
