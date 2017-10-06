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

    //Update
    vm.showTabUpdate = function(billingCycle){
      vm.billingCycle = billingCycle
      tabs.show(vm, {tabUpdate:true})
    }
    vm.update = function () {
      const updateUrl =  `${url}/${vm.billingCycle._id}`
      $http.put(updateUrl, vm.billingCycle).then(
        //Sucesso
        function (response) {
          vm.refresh()
          msgs.addSuccess('Alterado com sucesso!')
        },
        //error
        function (response) {
          msgs.addError(response.data.errors)
        }
      )
    }

    //Delete
    vm.showTabDelete = function(billingCycle){
      vm.billingCycle = billingCycle
      tabs.show(vm, {tabDelete:true})
    }
    vm.delete = function () {
      const deleteUrl =  `${url}/${vm.billingCycle._id}`
      $http.delete(deleteUrl, vm.billingCycle).then(
        //Sucesso
        function (response) {
          vm.refresh()
          msgs.addSuccess('Deletado com sucesso!')
        },
        //error
        function (response) {
          msgs.addError(response.data.errors)
        }
      )
    }
    //Chamar a funçao refresh sempre q acessar o controller
    vm.refresh()
  }
})()
