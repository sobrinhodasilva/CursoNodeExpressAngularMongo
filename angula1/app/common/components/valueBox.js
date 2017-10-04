//componente

angular.module('primeiraApp').component('valueBox',{
  bindings:{
    grid:'@',
    colorClass:'@',
    value:'@',
    text:'@',
    iconClass:'@'
  },
  controller:[
    'gridSystem', // gridSystemFactory.js mesmo nome
    function (gridSystem){
      // $onInit garante que seja iniciado depois que todos bindings estejam carregados
      this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
    }
  ],
  template: `
    <div class="{{ $ctrl.gridClasses }}">
      <div class="small-box {{ $ctrl.colorClass }}">
        <div class="inner">
          <h3>{{ $ctrl.value }}</h3>
          <p>
            {{ $ctrl.text }}
          </p>
          <div class="icon">
            <i class="fa {{ $ctrl.iconClass }}"></i>
          </div>
        </div>
      </div>
    </div>
    `
})
