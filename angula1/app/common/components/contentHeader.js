// Criar componente do conteúdo do header de cada página
// {{$ctrl.variavel}} $ctrl é o padrão

angular.module('primeiraApp').component('contentHeader',{
  bindings:{
    name:'@',
    small:'@',
  },
  template:`
    <section class="content-header">
      <h1>{{$ctrl.name}} <small>{{$ctrl.small}}</small></h1>
    </section>
  `
})
