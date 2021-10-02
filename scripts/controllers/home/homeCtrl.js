'use strict';

app.controller('homeCtrl', ['$scope', 'loginService', 'permisosService', '$http', '$location', '$cookies', '$rootScope', '$timeout', '$log', '$log', '$routeParams',
    function($scope, loginService, permisosService, $http, $location, $cookies, $rootScope, $timeout, $log, $routeParams) {

        $scope.totalVenta = 0;
        $scope.venta = [];
        $scope.ventas = [];
        $scope.detalles = [];
        $scope.productos = [
            {id: 1,producto : 'Arroz con pato', precio : 15},
            {id: 2,producto : 'Arroz con mariscos', precio : 20},
            {id: 3,producto : 'Ceviche Mixto', precio : 25},
            {id: 4,producto : 'Parihuela', precio : 30},
            {id: 5,producto : 'Sudado de pescado', precio : 25},
            {id: 6,producto : 'Chicharron de pescado', precio : 25},
            {id: 7,producto : 'Cerveza cuzqueña', precio : 8}
        ];

        $scope.listarVentas = function() {
            try {
                var resultado = $http.post('controller-be/venta.php', { accion: 'ListarVentas' });
                resultado.success(function(data) {
                    if (data["success"] == true) {
                        $scope.ventas = [];
                        $scope.ventas = data["data"];
                    } else {
                        if (data["success"] == false) {
                            alert(data["data"]);
                        } else {
                            alert(data);
                        }
                    }
                })
                resultado.finally(function(data) {
                });
            } catch (err) {
            } finally {
            }
        }

        $scope.listarVentas();

        $scope.agregarDetalle = function() {
            try {
                $scope.totalVenta = 0;
                if($scope.venta.txtDetalleProducto == undefined || $scope.venta.txtDetalleProducto == '') {
                    alert("Ingrese Producto");
                    return;
                }
                if($scope.venta.DetalleCantidad == undefined || $scope.venta.DetalleCantidad == '') {
                    alert("Ingrese Cantidad");
                    return;
                }
                if($scope.venta.txtDetallePrecio == undefined || $scope.venta.txtDetallePrecio == '') {
                    alert("Ingrese Cantidad");
                    return;
                }
                var indice = -1;
                for (let i = 0; i < $scope.detalles.length; i++) {
                    if($scope.detalles[i]["idProducto"] == $scope.venta.txtDetalleProducto.id){
                        indice = i;
                    }
                }
                if(indice >= 0){
                    $scope.detalles[indice]["cantidad"] = parseInt($scope.detalles[indice]["cantidad"]) +  parseInt($scope.venta.DetalleCantidad);
                    $scope.detalles[indice]["total"] = parseFloat($scope.detalles[indice]["cantidad"]) * parseFloat($scope.detalles[indice]["precio"]);;
                }else{
                    var obj = {};
                    obj["nro"] = $scope.detalles.length + 1;
                    obj["idProducto"] = $scope.venta.txtDetalleProducto.id;
                    obj["producto"] = $scope.venta.txtDetalleProducto.producto;
                    obj["cantidad"] = $scope.venta.DetalleCantidad;
                    obj["precio"] = $scope.venta.txtDetallePrecio;
                    obj["total"] = parseFloat($scope.venta.DetalleCantidad) * parseFloat($scope.venta.txtDetallePrecio);
                    $scope.detalles.push(obj);
                }
                $scope.venta.DetalleCantidad = '';
                $scope.venta.txtDetallePrecio = '';
                $scope.venta.txtDetalleProducto = undefined;
                $scope.venta.txtNombreDetalleProducto = '';
                for (let i = 0; i < $scope.detalles.length; i++) {
                    $scope.totalVenta = parseFloat($scope.totalVenta) + parseFloat($scope.detalles[i]["total"]);
                }
            }
            catch(err) {
                alert(err.message);
                $rootScope.layout.loading = false;
            }
        }

        $scope.agregarProductoDetalle = function(item) {
            $scope.venta.txtDetalleProducto = item;
            $scope.venta.txtNombreDetalleProducto = item.producto;
            $scope.venta.txtDetallePrecio = item.precio;
            $('#modalProducto').modal('toggle');
        }

        $scope.registrarVenta = function() {
            if($scope.detalles.length == 0){
                alert("No hay detalles en el pedido");
                return
            }

            var msjError = '';
            try {
                //msjError = $scope.validarDatosEntrada();
                if (msjError == '') {
                    $rootScope.layout.loading = true;
                    var resultado = $http.post('controller-be/venta.php', {
                        accion: 'RegistrarVenta',
                        cliente : $scope.venta.txtCliente,
                        idmesa : $scope.venta.cmbMeza,
                        fecha : $scope.venta.txtFecha,
                        total : $scope.totalVenta,
                        detalles: $scope.detalles,
                    });
                    resultado.success(function(data) {
                        if (data["success"] == true) {
                            $scope.listarVentas();
                            $scope.totalVenta = 0;
                            $scope.venta = [];
                            $scope.detalles = [];
                            $('#modalRegistro').modal('toggle');
                        } else {
                            if (data["success"] == false) {
                                alert(data["data"]);
                            } else {
                                alert(data);
                            }
                        }
                    })
                    resultado.finally(function(data) {
                        $rootScope.layout.loading = false;
                    });
                } else {
                    alert(msjError);
                }
            } catch (err) {
                throw err;
            }
        }
        
    }
]);