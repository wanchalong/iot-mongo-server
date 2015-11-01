angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this
    scope.name = 'Nati'



    scope.addIOT = function(input){
    	console.log(input)
    	save()

}




scope.save = function(){
 $http.get('/api/iot').success(function(response){

    	console.log(response)
    	scope.data = response
    })
}




  })
