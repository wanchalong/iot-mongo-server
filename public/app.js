angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this
    scope.name = 'Nati'

	scope.toTime = function(date){
    return moment(date).format('MMMM Do YYYY , h:mm:ss a')

  }


    show()

    scope.submit  = function(input){
    	console.log(input)
    	Saveiot(input)

} 
    scope.regis  = function(input){
      console.log(input)
      SaveMember(input)

}


function Saveiot(data) {
        $http.post('/api/iot', data)
          .then(function success (response) {
            //console.log(response)

            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
      }


function SaveMember(data) {
        $http.post('/api/member', data)
          .then(function success (response) {
            //console.log(response)

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


scope.login = function(input){
      console.log(input)
      $http.post('/api/member' , { username : input.username })
       .then(function success (response) {
            console.log(response)
            if(response.data[0].username == input.username ){
              console.log("have data")
            }else  console.log("don't have")
         })
    }


scope.tochart = function (){
  window.location = 'chart.html'
}

scope.chart = function(){
             
      console.log("chart working") 
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      /*label: "temperature",
                                      fillColor: "rgba(255,0,0,0.1)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []*/

            label: "temperature",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []



                                  },
                                  {
                                      /*label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.1)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []*/



            label: "relative_humidity",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("iot").getContext("2d")
               //var myLineChart = new Chart(ctx).Line(data);

               var myBarChart = new Chart(ctx).Bar(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myBarChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,scope.toTime(response.data[i].timestamp));
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }


  })
