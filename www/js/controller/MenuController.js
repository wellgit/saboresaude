angular.module('starter').controller('MenuController', menuController);

menuController.$inject = ['$rootScope','$state'];

function menuController($rootScope, $state){
    var vm = this;
    $rootScope.msgTeste = 'Menu';
}