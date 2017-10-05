// refactory IIFE Immediately Invoked Function Expression
// styleguide Johnpapa 
// Removendo variáveis do escopo global
(function () {

  angular.module('primeiraApp').controller('DashboardCtrl',[
    '$http',
    DashboardController
  ])
  function DashboardController( $http){
    const vm = this  // Padrão ViewModel styleguide
    //definir a funcao getSummary no scope
    $vm.getSummary = function (){
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then(function(response){
        const {credit = 0, debt = 0} = response.data
        $vm.credit = credit
        $vm.debt = debt
        $vm.total = credit - debt
      })
    }
    //Chamar a funcao para ser executada
    $vm.getSummary()
  }

})() //IIFE
