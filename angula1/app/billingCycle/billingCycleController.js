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
          vm.billingCycle = {credits:[{}], debts:[{}]}
          vm.billingCycles = response.data
          vm.calculateValues()
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
      vm.calculateValues()
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
      vm.calculateValues()
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

    // Metódos de Credito e debitos adicionar clonar e excluir
    //Créditos
    vm.addCredit = function (index) {
      vm.billingCycle.credits.splice(index + 1, 0, {})
    }
    vm.cloneCredit = function (index, {name, value}) {
      vm.billingCycle.credits.splice(index + 1, 0, {name, value})
      vm.calculateValues()
    }
    vm.deleteCredit = function (index) {
      if (vm.billingCycle.credits.length > 1) {
        vm.billingCycle.credits.splice(index, 1)
        vm.calculateValues()
      }
    }
    //Debitos
    vm.addDebt = function (index) {
      vm.billingCycle.debts.splice(index + 1, 0, {})
    }
    vm.cloneDebt = function (index, {name, value, status}) {
      vm.billingCycle.debts.splice(index + 1, 0, {name, value, status})
      vm.calculateValues()
    }
    vm.deleteDebt = function (index) {
      if (vm.billingCycle.debts.length > 1) {
        vm.billingCycle.debts.splice(index, 1)
        vm.calculateValues()
      }
    }

    //Sumário Credito e debitos
    vm.calculateValues = function () {
      vm.credit = 0
      vm.debt = 0

      if (vm.billingCycle) {
        vm.billingCycle.credits.forEach(function ({value}) {
          vm.credit += !value || isNaN(value)? 0 : parseFloat(value)
        })
        vm.billingCycle.debts.forEach(function ({value}) {
          vm.debt += !value || isNaN(value)? 0 : parseFloat(value)
        })
      }
      vm.total = vm.credit - vm.debt
    }

    //Chamar a funçao refresh sempre q acessar o controller
    vm.refresh()
  }
})()
