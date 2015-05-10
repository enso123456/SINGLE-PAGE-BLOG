angular.module('SPost.posts',[
	'SPost.posts.controllers',
	'SPost.posts.services',
	'ui.router'
]).config(function($stateProvider,$locationProvider) {
	$stateProvider.state('posts',{
		url:'/posts',
		templateUrl:'modules/posts/views/posts.html',
		controller:'PostController',
	}).state('viewPost',{
		url:'/post/:id',
		templateUrl:'modules/posts/views/view_post.html',
		controller:'ViewPostController',
	});
});