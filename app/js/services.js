'use strict';

/* Services */

var productServices = angular.module('productServices', ['ngResource']);
 
productServices.factory('Product', ['$resource',
  function($resource){
    return $resource('products/:id.json', {}, {
      query: {method:'GET', params:{id:'products'}, isArray:true}
    });
  }]);