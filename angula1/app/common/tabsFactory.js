//Factory para gerir o comportamnto das tabs ou abas do cadastro (Listar incluir  Editar deletar )
// as abas e os botões serão exibidos conforme o controller 
(function () {
  angular.module('primeiraApp').factory('tabs', [TabsFactory])

  function TabsFactory() {

    function show(owner,{
      tabList = false, // seta o valor padrão
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false
    }){
      //Corpo do metodo
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
    }

    return {show}
  }
})()
