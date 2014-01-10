var productControllers = angular.module('productControllers', []);
var solrUrl = "http://107.23.84.102:8080/solr/core1/select";

productApp.controller('ProductListCtrl', ['$scope',
    function ($scope) {
        $scope.init = function () {
            $.ajax({
                url: solrUrl,
                data: {
                    "q": "name:" + $scope.query,
                    "wt": "json",
                    "rows": 30
                },
                traditional: true,
                cache: true,
                async: true,
                dataType: 'jsonp',
                success: function (data) {
                    $scope.$apply(function () {
                        $scope.results = data.response.docs;
                    });
                },
                jsonp: 'json.wrf'
            })
        }
        $scope.orderProp = 'name';
    }]);

productApp.controller('ProductDetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    console.log($routeParams.id);
    $.ajax({
        url: solrUrl,
        data: {
            "q": "id:" + $routeParams.id,
            "wt": "json",
            "rows": 1
        },
        traditional: true,
        cache: true,
        async: true,
        dataType: 'jsonp',
        success: function (data) {
            $scope.$apply(function () {
                $scope.productDetails = data.response.docs;
            });
        },
        jsonp: 'json.wrf'
    })
}]);