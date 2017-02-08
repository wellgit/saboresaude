angular.module('starter').controller('HomeController', homeController);

homeController.$inject = ['$rootScope','$state'];

function homeController($rootScope, $state){
    var vm = this;
    vm.msgTeste = 'Hello World';
    vm.isExibirMenu = false;
    vm.exibirListaMenu = exibirListaMenu;

	function exibirListaMenu(){
		$state.go('menu');
	}
}