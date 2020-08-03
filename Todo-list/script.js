var mod = angular.module('mod', []);

mod.controller('ctr', function ($scope) {
    $scope.list = []
    $scope.new="";
    $scope.add=function () {
        if ($scope.new !="") {
        $scope.list.push($scope.new)
        $scope.new='';
        }
       
    }
    $scope.delete=function ($index) {
        $scope.list.splice($index,1);
    }
   
});
