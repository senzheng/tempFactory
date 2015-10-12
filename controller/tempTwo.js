angular.module("tempTwo",["ngRoute"])
         .constant("dataUrl","http://localhost:7707/events.json")
         .config(function($routeProvider){

            $routeProvider.when("/Details/:Deday",{
                 templateUrl: "/views/oneday.html",
                 controller: "tempCtrl2"
         	});

         	$routeProvider.otherwise({
                 templateUrl: "/views/calender.html",
                 controller: "tempCtrl"
         	});

         	


          })
         .controller("tempCtrl" , function ($scope, $http, $window, dataUrl, $location, sharedProperties){   
             var events = {};

            var d = new Date();//get the date of today

             $http.get(dataUrl)
                 .success(function (data){
                     events.items = data;
                 })
                 .error(function (error){
                      events.items = error;
                 });


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
                return daysEvent;
             }
               $scope.sizes = events;

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

                   var mon = $scope.todayMonth + 1;
                   //assume the year is 2015 at this point 
                   var length = $scope.numberOfDay;

                   var buffer = new Array(length);// the buffer is to include the 

                   for(var i = 0; i < length; i++){
                    buffer[i] = "NO EVENTS TODAY!";
                   }
                  // $scope.test = events.items[0].events.length;
                   for(var i = 0; i < events.items.length; i++){
                      if(events.items[i].month == ( mon - 1) ){
                        buffer[events.items[i].day - 1] = "Events : " ;
                        for(var j = 0; j < events.items[i].events.length; j++){

                            buffer[events.items[i].day - 1] = buffer[events.items[i].day - 1] +"  "+events.items[i].events[j].contents;
                          }
                      }
                   }
                   
                 $scope.eventss = buffer;
             }
             
            

            $scope.showDetails = function (DYear,Dday,Dmonth){
               //Dday is the day to show the 
                
                
                      	DYear = DYear.toString();
                      	Dday = Dday.toString();
                      	Dmonth = Dmonth.toString();
                      	//break;
                        var dayID = DYear.concat(Dmonth);
                        dayID = dayID.concat(Dday);
                        $scope.urll = dayID;
              
            }
            //$scope.test = sharedProperties.getObject();
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
          })
          .controller("tempCtrl2" ,function ($scope,  $http, $routeParams){
               
               var events = {};
                var params = $routeParams.Deday;
                $scope.test = params;
             $http.get("http://localhost:7707/events.json")
                 .success(function (data){
                     events.items = data;
                     var selectItem ={};
                     for(var i = 0; i < events.items.length; i ++){
                     	if(events.items[i].ID == params){
                     		$scope.Ditem = events.items[i].events;
                     		selectItem = events.items[i];
                     	}
                     }
                     $scope.add = function (eventC){
                         selectItem.events.push(eventC).$save();
                     }
                 })
                 .error(function (error){
                      events.items = error;
                 });
                 //$scope.hh = events.items;
                
                
          });


         