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




scope.tochart = function (){
  window.location = 'chart.html'
}

scope.tologin = function (){
window.location = 'login.html'
}


scope.login = function(){

      console.log(scope.username,scope.password)

      $http.post('/login' , {username : scope.username, password : scope.password })
       .then(function success (response) {
            console.log(response)
            if(response.data[0] != null){
              if(response.data[0].username == scope.username ){
                console.log("have")
                window.location = "chart.html"
              }else  console.log("don't have")
            }else   console.log("don't have")
         })
     
    }



scope.charttemp = function(){
             
      console.log("chart working") 
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                                                
                                        label: "temperature",
                                        fillColor: "rgba(220,220,220,0.5)",
                                        strokeColor: "rgba(220,220,220,0.8)",
                                        highlightFill: "rgba(220,220,220,0.75)",
                                        highlightStroke: "rgba(220,220,220,1)",
                                        data: []


                                        },

                                  {
                                                    
                                      label: "relative_humidity",
                                      fillColor: "rgba(151,187,205,0.5)",
                                      strokeColor: "rgba(151,187,205,0.8)",
                                      highlightFill: "rgba(151,187,205,0.75)",
                                      highlightStroke: "rgba(151,187,205,1)",
                                      data: []

                                        },

                                  {
                                        label: "ggggg",
                                      fillColor: "rgba(100,187,205,0.5)",
                                      strokeColor: "rgba(100,187,205,0.8)",
                                      highlightFill: "rgba(100,187,205,0.75)",
                                      highlightStroke: "rgba(100,187,205,1)",
                                      data: []
                                                            }
                              ]
                          };

               var ctx = document.getElementById("temp").getContext("2d")
               //var myLineChart = new Chart(ctx).Line(data);

               var myLineChart = new Chart(ctx).Bar(data);

                for(var s = 0;s<5;s++){
                      var max = 0;
                      var sum = 0;
                      var count = 0;
                      var avg = 0;
                      for(var i =0;i<response.data.length;i++){
                          if (response.data[i].iot_id==s){

                              if(parseInt(response.data[i].temperature)> parseInt(max)) { 

                                max = response.data[i].temperature }
                                sum = sum + parseInt(response.data[i].temperature);
                                count = count + 1;
                             }
                             if(parseInt(i) == parseInt(response.data.length)-1){
                                var min = max;
                                for(var i =0;i<response.data.length;i++){
                                    if (parseInt(response.data[i].iot_id)==s){
                                         
                                        if(parseInt(response.data[i].temperature) < parseInt(min)) { min = response.data[i].temperature }
                                        
                                       }
                                }
                                 avg = sum/count;
                                console.log(min + " " + max + " " + avg)

                                 myLineChart.addData([max,min,avg],"IOT-"+s);
                             }
                      }
                      
                  }
              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }




scope.chartrelative = function(){
             
      console.log("chart working") 
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                                                
                                        label: "temperature",
                                        fillColor: "rgba(220,220,220,0.5)",
                                        strokeColor: "rgba(220,220,220,0.8)",
                                        highlightFill: "rgba(220,220,220,0.75)",
                                        highlightStroke: "rgba(220,220,220,1)",
                                        data: []


                                        },

                                  {
                                                    
                                      label: "relative_humidity",
                                      fillColor: "rgba(151,187,205,0.5)",
                                      strokeColor: "rgba(151,187,205,0.8)",
                                      highlightFill: "rgba(151,187,205,0.75)",
                                      highlightStroke: "rgba(151,187,205,1)",
                                      data: []

                                        },

                                  {
                                        label: "ggggg",
                                      fillColor: "rgba(100,187,205,0.5)",
                                      strokeColor: "rgba(100,187,205,0.8)",
                                      highlightFill: "rgba(100,187,205,0.75)",
                                      highlightStroke: "rgba(100,187,205,1)",
                                      data: []
                                                            }
                              ]
                          };

               var ctx = document.getElementById("relative").getContext("2d")

               var myLineChart = new Chart(ctx).Bar(data);

                for(var s = 0;s<5;s++){
                      var max = 0;
                      var sum = 0;
                      var count = 0;
                      var avg = 0;
                      for(var i =0;i<response.data.length;i++){
                          if (response.data[i].iot_id==s){

                              if(parseInt(response.data[i].relative_humidity)> parseInt(max)) { 

                                max = response.data[i].relative_humidity }
                                sum = sum + parseInt(response.data[i].relative_humidity);
                                count = count + 1;
                             }
                             if(parseInt(i) == parseInt(response.data.length)-1){
                                var min = max;
                                for(var i =0;i<response.data.length;i++){
                                    if (parseInt(response.data[i].iot_id)==s){
                                         
                                        if(parseInt(response.data[i].relative_humidity) < parseInt(min)) { min = response.data[i].relative_humidity }
                                        
                                       }
                                }
                                 avg = sum/count;
                                console.log(min + " " + max + " " + avg)

                                 myLineChart.addData([max,min,avg],"IOT-"+s);
                             }
                      }
                      
                  }
              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }



scope.Del = function (id,index){
     
     $http.delete('/api/iot/'+id)
          .success(function(data) {
            scope.data.splice(index,1)
             
          })
          .error(function(data) {
            console.log('Error: ' + data)
          })
         
 

    }


  })
