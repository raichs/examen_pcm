'use strict';

var app = angular.module('examenApp', [
    'ngRoute',
    'ngCookies'
]);

app.controller('loginCtrl', ['$scope', '$http', '$location', '$cookies', '$rootScope', '$log', 'loginService',
    function($scope, $http, $location, $cookies, $rootScope, $log, loginService) {

        $scope.msjError = '';

        $scope.login = function(usuario) {
            try {
                $scope.LlamarLogin(usuario);
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
            }
        }

        $scope.LlamarLogin = function(usuario) {
            try {
                $scope.cargaData = true;
                if ((usuario != undefined)) {
                    if (usuario.name != "") {
                        $scope.cargaData = true;
                        loginService.login(usuario, $scope);
                    }
                } else {
                    $scope.cargaData = false;
                    $.snackbar({ content: "Usuario Incompleto. Ingrese todos los datos", style: "snackbar", timeout: 5000 });
                }
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
                $scope.cargaData = false;
            }
        }

        $scope.enter = function(keyEvent, usuario) {
            try {
                if (keyEvent.which === 13) {
                    $scope.LlamarLogin(usuario);
                }
            } catch (err) {
                $.snackbar({ content: err.message, style: "snackbar", timeout: 5000 });
            }
        }
    }
])