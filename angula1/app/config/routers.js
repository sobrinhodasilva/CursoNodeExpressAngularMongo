//

angular.module('primeiraApp').config([
  '$stateProvider', // ui-router
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider){  // forma como angular faz injecao de dependencia
    $stateProvider
      .state('dashboard', {
        url:"/dashboard",
        templateUrl: "dashboard/dashboard.html"
      })
      .state('billingCycle', {
        url:"/billingCycle",
        templateUrl: "billingCycle/tabs.html"
      })

    // Url padrão
    $urlRouterProvider.otherwise('/dashboard')
  }
])
