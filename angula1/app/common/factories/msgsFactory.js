(function () {

  angular.module('primeiraApp').factory('msgs', [
    'toastr',
    MsgsFactory
    ])

    function MsgsFactory(toastr) {
      function addMsg(msgs, title, method) {
        //Caso sejam um array de mensagens
        if(msgs instanceof Array){
          // pecorre o arry de mensagens e o metodo é passado dinamicamente
          msgs.forEach(msg => toastr[method](msg, title))

        }else{ //apenas uma mensagem
          toastr[method](msgs, title)
        }
      }
      //Metodo sucesso Simplifica o acesso a factory pois há apenas um parametro
      function addSuccess(msgs) {
        addMsg(msgs, 'Sucesso', 'success')
      }
      //Metodo Error
      function addError(msgs) {
        //console.log(msgs)
        addMsg(msgs, 'Erro', 'error')
      }
      //Exponhe os metodos para acesso externo
      return {addSuccess,addError}
    }
})()
