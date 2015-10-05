angular.module("tempOne")
         .controller("tempCtrl" , function ($scope){

            var picture = {
                 "user": "sen",
                 "items": [{"name": "New York City", "description" : "The biggest city in USA" ,"genre" : "City" ,url : "img/nyc1.jpg"},
                      {"name": "San Fransisco", "description" : "Lots of the biggest companies of the world in the earth", "genre" : "City","url" : "img/sf1.jpg"},
                      {"name": "Los Angeles", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/la1.jpg"},
                      {"name": "San Diego", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/sd1.jpg"},
                      {"name": "Seattle", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/sea1.jpg"},
                      {"name": "Atlanta", "description": "The big city sprung in GA. The Olympic is a symbol of the Atlanta", "genre" : "City","url" : "img/Atl1.jpg"},
                      {"name": "Boston", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/bt1.jpg"},
                      {"name": "Chicago", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/chi1.jpg"},
                      {"name": "Husky", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "Animal","url" : "img/h1.jpg"},
                      {"name": "Golden Retriver", "description": "The big city sprung in GA. The Olympic is a symbol of the Atlanta", "genre" : "Animal","url" : "img/gr1.jpg"},
                      {"name": "German Shalper", "description": "The most good dog in the world. And sunshine all year round", "genre" : "Animal","url" : "img/gs1.jpeg"},
                      {"name": "Smoyed", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "Animal","url" : "img/sm1.jpeg"},
                      {"name": "Corgi", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "Animal","url" : "img/cor1.jpg"}]
             };




             $scope.tempitem = picture.items.slice(0,4);
             $scope.itemC = picture.items;
             // the default that we show 4 items per page
             $scope.hide = true;
             // the hide means that the data shown should be hidden
             $scope.itemNumber = 4;
             $scope.title = "All Category";
             // the items shown per page
             $scope.totalItem = picture.items.length;
             $scope.total = $scope.itemC.length;
            var temp = new Array();

                temp = picture.items;

            $scope.CategoryScope = picture.items;


             $scope.show = function (item){
                  $scope.itemShow = item;
                  $scope.hide = false;

             }
             //when a item being selected and the detail will show in the particular place.

             $scope.hideBlock = function (hide){
                $scope.hide = true;
             }
                
                var result = [];
                var keys = {};
             $scope.showOne = function (category){
                  result = [];
                  keys = {};
              if(category != 0){
                 keys[category] = true;
                 for(var i = 0; i < picture.items.length; i++){
                       var val = picture.items[i].genre;
                       if(!angular.isUndefined(keys[val])){
                            result.push(picture.items[i]);
                       }
                      
                 }
                    $scope.title = category;
                 
               }else{
                    result = picture.items;
                    $scope.title = "All Category";
               }

 
                 $scope.tempitem = result.slice(0,$scope.itemNumber);
                 $scope.totalItem = result.length;
                 
                 //temp = result;
                 //$scope.test = result;
                 $scope.itemC = result;
                 $scope.buttonOne = 1;
                 
              }
                 

              $scope.NumberOfPage = function (number,itemC) {

                      $scope.itemNumber = number;
                      $scope.tempitem = itemC.slice(0,number);
                      $scope.buttonOne = 1;
                  }
                 //eetemp = $scope.test;
                


                 
             
             
              //the function performs when the certain number items being selected and the screen will show following rules.

             $scope.range = function(count){

                 var ratings = []; 

               for (var i = 0; i < count; i++) { 
                ratings.push(i) 
              } 

                return ratings;
              }
               // automatically calculate the number of pages we need based on dynamical changes of the number of items.

               $scope.buttonOne = 1;
              $scope.nextOrLast = function(index, itemPerPage,itemC){
                 $scope.buttonOne = index;
                 $scope.tempitem = itemC.slice( (index - 1)* itemPerPage, (index - 1)* itemPerPage + itemPerPage);
              }
              // select the different pages  and show orderd sequence of the pages 
              
       });
