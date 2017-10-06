(function (){
    'use strict';

angular.module('ShoppingListCheckOff', [])
.controller("ToBuyController", ToBuyController)
.controller('AlreadyBoughtController', AreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    toBuyCtrl.toBuyList = ShoppingListCheckOffService.showList(ShoppingListCheckOffService.toBuyList);
    toBuyCtrl.addToBoughtList = function (index) {
        ShoppingListCheckOffService.addItemToBoughtList(index);
    }
}

AreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.boughtList = ShoppingListCheckOffService.showList(ShoppingListCheckOffService.boughtList);
}

function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = [
        {
          name : "Snickers",
          quantity : "23"
        },
        {
          name : "Seeds",
          quantity : "470"
        },
        {
          name : "whater",
          quantity : "3"
        },
        {
          name : "Snacks",
          quantity : "10"
        },
        {
          name  : "Chips",
          quantity : "222"
        },
        {
           name  : "ChocoMilk",
           quantity : "2"
         }
      ];
    service.boughtList = [];

    service.showList = function(list) {
            return list
    }

    service.addItemToBoughtList = function (indexNr) {
        service.boughtList.push(service.toBuyList[indexNr]);
        service.toBuyList.splice(indexNr, 1);
    }
}

})();