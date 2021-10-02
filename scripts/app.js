'use strict';

var app = angular.module('examenApp', [
    'ngRoute',
    'ngCookies',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination',
])


app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'homeCtrl'
        })
        .when('/permisos', {
            templateUrl: 'views/permisos/permisos.html',
            controller: 'permisosCtrl'
        })
        .when('/usuarios', {
            templateUrl: 'views/permisos/usuarios.html',
            controller: 'usuarioCtrl'
        })
        .when('/clientes', {
            templateUrl: 'views/mantenimiento/clientes.html',
            controller: 'clienteCtrl'
        })
        .when('/sector', {
            templateUrl: 'views/mantenimiento/sector.html',
            controller: 'sectorCtrl'
        })
        .when('/categoria', {
            templateUrl: 'views/mantenimiento/categoria.html',
            controller: 'categoriaCtrl'
        })
        .when('/personal', {
            templateUrl: 'views/mantenimiento/personal.html',
            controller: 'personalCtrl'
        })
        .when('/prestamo', {
            templateUrl: 'views/proceso/prestamo.html',
            controller: 'prestamoCtrl'
        })
        .when('/aperturaCajaEncargado', {
            templateUrl: 'views/proceso/aperturaCajaEncargado.html',
            controller: 'aperturaCajaEncargadoCtrl'
        })
        .when('/aperturaCajaGestor', {
            templateUrl: 'views/proceso/aperturaCajaGestor.html',
            controller: 'aperturaCajaGestorCtrl'
        })
        .when('/ruta', {
            templateUrl: 'views/mantenimiento/ruta.html',
            controller: 'rutaCtrl'
        })
        .when('/subcategoria', {
            templateUrl: 'views/mantenimiento/subcategoria.html',
            controller: 'subcategoriaCtrl'
        })
        .when('/cobranza', {
            templateUrl: 'views/proceso/cobranza.html',
            controller: 'cobranzaCtrl'
        })
        .when('/arqueoDiario', {
            templateUrl: 'views/proceso/arqueoDiario.html',
            controller: 'arqueoDiarioCtrl'
        })
        .when('/reporteClientes', {
            templateUrl: 'views/reportes/reporteClientes.html',
            controller: 'reporteClientesCtrl'
        })
        .when('/reporteNuevosClientes', {
            templateUrl: 'views/reportes/reporteNuevosClientes.html',
            controller: 'reporteNuevosClientesCtrl'
        })
        .when('/reporteRenovaciones', {
            templateUrl: 'views/reportes/reporteRenovaciones.html',
            controller: 'reporteRenovacionesCtrl'
        })
        .when('/reporteClientesCulminados', {
            templateUrl: 'views/reportes/reporteClientesCulminados.html',
            controller: 'reporteClientesCulminadosCtrl'
        })
        .when('/backup', {
            templateUrl: 'views/seguridad/backup.html',
            controller: 'backupCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function($rootScope, $location, loginService) {
    $rootScope.layout = {};
    $rootScope.layout.loading = false;

    //Validamos el cambio de ruta
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.layout.loading = true;
        //verificamos que no este en la raiz de las rutas, ya que esta será el login
        if ($location.path() != '/login') {
            //validamos que el usuario este logueado
            loginService.islogged();
        }
    })

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.layout.loading = false;

    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.layout.loading = false;

    });

});