angular.module('starter').controller('HomeController', homeController);

homeController.$inject = ['$rootScope','$state'];

function homeController($rootScope, $state){
    var vm = this;
    $rootScope.msgTeste = 'Hello World';
    vm.isExibirMenu = false;


	function exibirListaMenu(){
		vm.isExibirMenu = true;
		console.log('Clicado');
		
	}
}