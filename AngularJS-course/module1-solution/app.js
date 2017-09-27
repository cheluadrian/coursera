(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheck);
LunchCheck.$inject = ['$scope'];

function LunchCheck($scope) {
  $scope.inputText = "";
  $scope.output = "";

  $scope.displayProperMessage = function() {
    var nrOfItemsInTextBox = getNrOfItems($scope.inputText);
    if(!nrOfItemsInTextBox){
        $scope.output ="Please enter data first";
        $scope.outputBox = {color: "red"}
        $scope.inputBox = {border: "1px solid red"}
    } else if(nrOfItemsInTextBox <= 3) {
        $scope.output = "Enjoy!";
        $scope.outputBox = {color: "green"}
        $scope.inputBox = {border: "1px solid green"}
    } else if(nrOfItemsInTextBox > 3) {
        $scope.output = "Too much!";
        $scope.outputBox = {color: "green"}
        $scope.inputBox = {border: "1px solid green"}
    }
  }
};

function getNrOfItems(inputText) {
      if(!inputText) {
        return 0;
      }
      var inputItems = inputText.split(",");
      return inputItems.length;
 }

})();
