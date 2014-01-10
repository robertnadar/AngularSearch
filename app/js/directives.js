angular.module('solrSearch', []).
directive('search', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope, $element) {         
            $scope.init = function (q) {
                $scope.q = q;
                $.ajax({
                    url: "http://107.23.84.102:8080/solr/core1/select",
                    data: {
                        "q": $scope.q,
                        "wt": "json",
                        "rows":30
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
                });
            }
			$scope.orderProp ='name';			
        },
        template:          
            '    <ul class="phones">'+
            '        <li ng-repeat="result in results" class="thumbnail">'+
            '             <a href="#/phones/{{result.id}}" class="thumb"><img ng-src="http://images.oneclickdigital.com/{{result.s3FolderName}}/{{result.s3FolderName}}_image_95x140.jpg"></a>'+
			'			  <a href="#/phones/{{result.id}}">{{result.name}}</a>'+
            '        </li>'+
            '    </ul>',
        replace: true
    };
})

