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
             var Month = d.getMonth();
             var Year = d.getFullYear();

             $scope.numberOfDay = new Date(Year, Month + 1, 0).getDate();
              
              $scope.showMonth = function (){
             	if($scope.todayMonth - 1 == 0){
                   $scope.Months = "January";
             	}else if($scope.todayMonth - 1 == 1){
                   $scope.Months = "February";
             	}else if($scope.todayMonth - 1 == 2){
             		$scope.Months = "March";
             	}else if($scope.todayMonth - 1 == 3){
             		$scope.Months = "April";
             	}else if($scope.todayMonth - 1 == 4){
             		$scope.Months = "May";
             	}else if($scope.todayMonth - 1 == 5){
             		$scope.Months = "June";
             	}else if($scope.todayMonth - 1== 6){
             		$scope.Months = "July";
             	}else if($scope.todayMonth - 1== 7){
             		$scope.Months = "August";
             	}else if($scope.todayMonth - 1== 8){
             		$scope.Months = "September";
             	}else if($scope.todayMonth - 1== 9){
             		$scope.Months = "October";
             	}else if($scope.todayMonth - 1== 10){
             		$scope.Months = "November";
             	}else{
             		$scope.Months = "December";
             	}
             }
             
             $scope.getDays = function (index){
                   var someday = new Date(Year , $scope.todayMonth - 1, index).getDay();
                     //$scope.dayOne = someday;
                   if(someday == 0){
                   	$scope.day = "SUNDAY";
                   }else if(someday == 1){
                   	$scope.day = "MONDAY";
                   }else if(someday == 2){
                   	$scope.day = "TUESDAY";
                   }else if(someday == 3){
                   	$scope.day = "WEDNESDAY"
                   }else if(someday == 4){
                   	$scope.day = "THURSDAY";
                   }else if(someday == 5){
                   	$scope.day = "Friday";
                   }else if(someday == 6){
                   	$scope.day = "SATURDAY";
                   }
             }
             
            $scope.lastOrNext = function (index) {
                    $scope.numberOfDay = new Date(Year, index + 1, 0).getDate();
                    $scope.todayMonth = index + 1;
            }

             //Function range will return a list or array of numbers
             $scope.range = function(count){

                 var ratings = []; 

               for (var i = 0; i < count; i++) { 
                ratings.push(i) 
              } 

                return ratings;
              }
          
         });