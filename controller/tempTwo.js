angular.module("tempTwo")
         .controller("tempCtrl" , function ($scope){
              
             var events = {
                  "user": "sen",
                  "items": [{"year":"2015", "month":"10", "day":"3","events":[{"content" : "readbooks","time":"1030","Done":"true"},
                                                                               {"content" : "Riding","time":"1400","Done":"false"},
                                                                               {"content" : "See games","time":"1900","Done":"true"}]},
                            {"year":"2015", "month":"10", "day":"5","events":[{"content" : "readbooks","time":"1030","Done":"true"},
                                                                               {"content" : "Riding","time":"1400","Done":"false"},
                                                                               {"content" : "See games","time":"1900","Done":"true"}]},
                            {"year":"2015", "month":"10", "day":"15","events":[{"content" : "readbooks","time":"10:30","Done":"true"},
                                                                               {"content" : "Riding","time":"14:00","Done":"false"},
                                                                               {"content" : "See games","time":"19:00","Done":"true"}]},
                            {"year":"2015", "month":"9", "day":"3","events":[{"content" : "readbooks","time":"10:30","Done":"true"},
                                                                               {"content" : "Riding","time":"14:00","Done":"false"},
                                                                               {"content" : "See games","time":"19:00","Done":"true"}]},
                            {"year":"2014", "month":"10", "day":"3","events":[{"content" : "readbooks","time":"10:30","Done":"true"},
                                                                               {"content" : "Riding","time":"14:00","Done":"false"},
                                                                               {"content" : "See games","time":"19:00","Done":"true"}]},
                            {"year":"2016", "month":"10", "day":"5","events":[{"content" : "readbooks","time":"10:30","Done":"true"},
                                                                               {"content" : "Riding","time":"14:00","Done":"false"},
                                                                               {"content" : "See games","time":"19:00","Done":"true"}]}]
             };

            var d = new Date();//get the date of today

             $scope.daysEvent = function (day) {
             	var eventContent = new Array();
                 
                for(var i = 0; i < events.items.length; i++){
                	if(day == events.items[i].day){
                		daysEvent = events.items[i].events;
                		break;
                	}else{
                		daysEvent = [];
                		break;
                	}
                }
                return daysEvent
             }

             $scope.todayDay = d.getDate();
             $scope.todayMonth = d.getMonth() + 1;
             $scope.todayYear = d.getFullYear();

             $scope.numberOfDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();;
             
             //Function range will return a list or array of numbers
             $scope.range = function(count){

                 var ratings = []; 

               for (var i = 0; i < count; i++) { 
                ratings.push(i) 
              } 

                return ratings;
              }
          
         });