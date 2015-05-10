angular.module('SPost.posts.controllers',[])
	.controller('PostController',function($scope,$state,postService) {
		$scope.getAllPosts = function() {
			return postService.getAllPosts(); 
		};

		$scope.posts = $scope.getAllPosts();

	}).controller('ViewPostController',function($scope,$stateParams,$state,postService) {

		$scope.viewPosts = function(id) {
			console.log(postService.getPostbyId($stateParams.id));

			return postService.getPostbyId($stateParams.id);
		};

		$scope.close = function() {
			$state.go('posts');
		};

		$scope.post = $scope.viewPosts($stateParams.id);
	});
