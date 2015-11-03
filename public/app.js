angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this
    scope.name = 'Nati'

	
    show()
    scope.submit  = function(input){
    	console.log(input)
    	Saveiot(input)

}
function Saveiot(data) {
        $http.post('/api/iot', data)
          .then(function success (response) {
            console.log(response)

            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
      }


function show(){
 $http.get('/api/iot').success(function(response){

    	console.log(response)
    	scope.data = response
    })

}



  })
