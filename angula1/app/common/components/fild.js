(function (){
  angular.module('primeiraApp').component('field',{
    bindings:{
      id:'@',
      label:'@',
      grid:'@',
      placeholder:'@',
      type:'@',
      model: '=',// binding bidirecional toda alteracao no componente sera refletido no controler  e virce versa
    },
    controller:[
      'gridSystem',
      function (gridSystem){
        // $onInit garante que o controller  seja iniciado depois que todos bindings estejam carregados
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template:`
      <div class="{{ $ctrl.gridClasses }}">
        <div class="form-group">
          <label for="{{ $ctrl.id}}">{{ $ctrl.label }}</label>
          <input id="{{ $ctrl.id}}" class="form-control" placeholder="{{ $ctrl.placeholder}}" type="{{ $ctrl.type }}"           ng-model="$ctrl.model" />
        </div>
      </div>
    `
  })
})()
