angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this
    scope.name = 'Nati'

	

    scope.addIOT = function(input){
    	console.log(input)
    	Saveiot()


}

function Saveiot(input) {
        $http.post('/api/iot', input)
          .then(function success (response) {
            console.log(response)

            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
      }



 $http.get('/api/iot').success(function(response){

    	console.log(response)
    	//scope.data = response
    })





  })
