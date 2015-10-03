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
                      {"name": "Boston", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/sd1.jpg"},
                      {"name": "Chicago", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "City","url" : "img/sd1.jpg"},
                      {"name": "Husky", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "Animal","url" : "img/h1.jpg"},
                      {"name": "Golden Retriver", "description": "The big city sprung in GA. The Olympic is a symbol of the Atlanta", "genre" : "Animal","url" : "img/gr1.jpg"},
                      {"name": "German Shalper", "description": "The most good dog in the world. And sunshine all year round", "genre" : "Animal","url" : "img/gs1.jpeg"},
                      {"name": "Smoyed", "description": "The most beaufiful beaches in the LA area. And sunshine all year round", "genre" : "Animal","url" : "img/sm1.jpeg"}]
             };




             $scope.tempitem = picture.items.slice(0,4);
             // the default that we show 4 items per page
             $scope.hide = true;
             // the hide means that the data shown should be hidden
             $scope.itemNumber = 4;
             
             // the items shown per page
             
             var temp = new Array();

            function filter (tempOne){
                  for(var i = 0; i < picture.items.length;i++){
                      if(!contains(tempOne, picture.items[i].genre)){
                        tempOne.push(picture.items[i].genre);
                      }
                  }
                  return tempOne;
              }
                     
             $scope.CategoryScope = filter(temp);


             function contains(x,y){
              for(var i = 0; i < x.length; i++){
                if(x[i] === y){
                  return true;
                }
              }
              return false;
             }
                
            
               
              
               
             $scope.show = function (item){
                  $scope.itemShow = item;
                  $scope.hide = false;
             }
             //when a item being selected and the detail will show in the particular place.

             $scope.hideBlock = function (hide){
                $scope.hide = true;
             }
                
                temp = picture.items;
               $scope.showOne = function (category){
                 temp = [];
                for(var i = 0; i < picture.items.length; i++){
                  if(picture.items[i].genre === category){
                    temp.push(picture.items[i]);
                    
                  }
                }
                
                
                $scope.pageNo = temp.length / $scope.itemNumber;
                $scope.tempitem = temp.slice(0,$scope.itemNumber);
                 $scope.test = temp;

              }
               $scope.total = temp.length;
             //when finishing a item and proceed for other one, 
             $scope.total = temp.length;
             //the total show the total number of items 
             var totalItems = $scope.total;

             var itemPerPage = $scope.itemNumber;
             //The number of items per page shows in the screen
             var totalPage = totalItems / itemPerPage;
             //the number of items will be shown in number of pages.
             
              
             $scope.pageNo = totalPage;
             //same above
             
             $scope.NumberOfPage = function (number) {
                $scope.itemNumber =  number;
                $scope.pageNo = totalItems / number;
                itemPerPage = number;
                $scope.tempitem = temp.slice(0,number);
              }
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
              $scope.nextOrLast = function(index){
                 $scope.buttonOne = index;
                 $scope.tempitem = temp.slice( (index - 1)*itemPerPage, (index - 1)*itemPerPage + itemPerPage);
              }
              // select the different pages  and show orderd sequence of the pages 
              
             
              

      });
