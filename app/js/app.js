angular.module('SPost',['SPost.posts','SPost.posts.controllers','SPost.posts.services'])
	.run(function($state){
	  	$state.go('posts');
	});