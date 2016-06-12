angular.module('myApp', []).controller('myController', function($scope){
  $scope.focus = function($event) {
    $($event.currentTarget).css({
      border: '3px solid red'
   });
  }

  $scope.blur = function($event) {
    $($event.currentTarget).css({
      border : '3px solid transparent'
   });
  }


 $scope.select = function($event){
      $($event.currentTarget).toggleClass("selected");
 };
});
