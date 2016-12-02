angular.module('starter').factory('MenuService', menuService);

menuService.$inject = ['$rootScope'];

function menuService() {

    var service = {};
    service.audit = audit;
    return service;

    function audit(entity) {
        entity.audit = {
                "usuarioCadastro" : "admin",
                "dataCadastro" : new Date()
        };
    }

}