angular.module('myApp.books.controllers', [])
	.controller('SiteController', function($scope){
		$scope.publisher='SitePoint';
		$scope.type="Web Development";
		$scope.name="Scope for SiteController";
	})
	.controller('BookController', function($scope){
		$scope.books = ['Jump Start HTML5','Jump Start CSS','Jump Start Responsive Web Design'];
		$scope.name="Scope for BookController";
	});