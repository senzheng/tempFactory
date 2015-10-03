angular.module("tempOne")
         .controller("itemController", function ($scope){
                var itemPerPage = 4;

           $scope.NumberOfPage = function (number) {
           	    var temp = new Array();
           	    temp = $scope.test;
                $scope.itemNumber =  number;
                $scope.pageNo = temp.length / number;
                itemPerPage = number;
                $scope.tempitem = temp.slice(0,number);
              }

      });