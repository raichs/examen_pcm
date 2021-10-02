'use strict';
app.factory('permisosService', function ($http)
{
    var permis = [];
    return{
        permisos: function (scope)
        {
            if (permis.length == 0)
            {
                // var $promise = $http.post('controller-be/permiso.php'); //send data to user.php
                // $promise.success(function (data)
                // {
                //     if (data["success"] == true) {
                //         permis = data['data'];
                //         scope.accesos = permis;
                //     }else{
                //         if (data["success"] == false) {
                //             alert(data["data"]);    
                //         }else{
                //             alert(data);
                //         }
                //     }
                    
                // })
            }
            else
            {
                scope.accesos = permis;
            }
        },
        jerarquia_menu: function (scope, data)
        {
            scope.cnivjerarquia = data;
        }
    }
});