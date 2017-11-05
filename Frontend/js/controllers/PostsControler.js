app.controller('PostsControler', ['$http', '$scope', function($http, $scope) {
    $scope.posts = [];

    $http.get('http://localhost:11709/api/blogpost/get')
        .then(function(response) {
            $scope.posts = response.data;
        })
        .then(function() {
            angular.forEach($scope.posts, function(obj) {
                obj.Picture = `image${obj.Id}.jpg`;
            })
        })
}])