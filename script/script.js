$(document).ready(function(){
    $(".btn_menu,.close").on('click',function(){
        $(".menu").fadeToggle();
        $('body').toggleClass('scroll_hidden');
    })
})


angular.module('muslim-app', []).contoller('muslim-cover', function($scope){
    $scope.currentTab = 0;
    $scope.nextSlide = function(){
        $scope.currentTab += 1;
    }
});