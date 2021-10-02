'use strict';

app.controller('mainCtrl', ['$scope', 'loginService', 'permisosService', '$http', '$location', '$cookies', '$rootScope', '$timeout', '$log', '$log', '$routeParams',
    function($scope, loginService, permisosService, $http, $location, $cookies, $rootScope, $timeout, $log, $routeParams) {

        $scope.accesos = [];
        $scope.nombreUsuario = '';
        $scope.imagenUsuario = '';

        $scope.consultarPermisos = function() {
            try {
                permisosService.permisos($scope);
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
            }
        }

        //LLAMO A CONSULTAR PERMISOS
        $scope.consultarPermisos();

        $scope.definirjerarquia = function(cNivPadre) {
            try {
                permisosService.jerarquia_menu($scope, cNivPadre);
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
            } finally {
                NProgress.done();
            }
        }

        $scope.NameUser = function(cPerNombre) {
            $scope.nombreUsuario = cPerNombre;
        }

        $scope.ImagenUser = function(cPerImagen) {
            $scope.imagenUsuario = cPerImagen;
        }

        $scope.cerrarSesion = function() {
            try {
                $scope.LlamarCerrarSesion();
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
            } finally {
                NProgress.done();
            }
        }

        $scope.LlamarCerrarSesion = function() {
            loginService.logout();
        }

        $scope.cambiarActiveMenu = function(enlace) {
            try {
                $('#menuPrincipal li').each(function(){
                    $(this).removeClass('active');
                });
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
            }
        }
    }
]);