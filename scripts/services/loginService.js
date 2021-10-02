'use strict';
app.factory('loginService', function ($http, $location) {
    var objUser = [];
    return{
        login: function (data, scope)
        {
            var $promise = $http.post('controller-be/login.php', data); //send data to user.php
            $promise.success(function (data)
            {
                if (data["success"] == true) {
                    var usuario = data["data"];
                    if (usuario.length > 0) {
                        scope.varUsuario = usuario;
                        objUser = usuario;
                        location.href = "main.html";
                    }else{
                        //alert('Usuario o Clave incorrecta');
                        scope.cargaData = false;
                        scope.msjError = 'Usuario o Clave incorrecta';
                        //$location.path('/login');
                    }
                }else{
                    if (data["success"] == false) {
                        alert(data["data"]);    
                    }else{
                        alert(data);
                    }
                }
            });
        },
        logout: function ()
        {
            $http.post('controller-be/destroy_session.php');
            //$location.path('/login');
            location.href = "index.html";
        },
        obtenerUser: function (scope)
        {
            return  objUser;
        },
        islogged: function ()
        {
            var $checkSessionServer = $http.post('controller-be/check_session.php');
            $checkSessionServer.success(function (data)
            {
                if (data == -1)
                {
                    location.href = "index.html";
                }else{
                }
            });
        }

    }
});