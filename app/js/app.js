var productApp = angular.module('productApp', [
  'ngRoute',
  'productControllers',
  'productFilters',
  'productServices'
]);

productApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/products', {
            templateUrl: 'partials/product-list.html',
            controller: 'ProductListCtrl'
        }).
        when('/products/:id', {
            templateUrl: 'partials/product-detail.html',
            controller: 'ProductDetailCtrl'
        }).
        otherwise({
            redirectTo: '/products'
        });
  }]);
