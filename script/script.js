$(document).ready(function(){
    $(".btn_menu,.close").on('click',function(){
        $(".menu").fadeToggle();
        $('body').toggleClass('scroll_hidden');
    })
    $(".slide_toggle").on('click',function(e){
        e.preventDefault()
        $(this).css('display','none');
        $(".slide_none").fadeToggle('slow');
    })
})


angular.module('muslim-app', []).controller('muslim-cover', function($scope){
    $scope.currentTab = 0;
    $scope.nextSlide = function(){
        ($scope.currentTab >= 7 )? $scope.currentTab = 7 : $scope.currentTab += 1;
    }
    $scope.previousSlide = function(){
        ($scope.currentTab <= 0 )? $scope.currentTab = 0 : $scope.currentTab -= 1;
    }
    $scope.currentTab2 = 0;
    $scope.nextSlide2 = function(){
        ($scope.currentTab2 >= 9 )? $scope.currentTab2 = 9 : $scope.currentTab2 += 1;
    }
    $scope.previousSlide2 = function(){
        ($scope.currentTab2 <= 0 )? $scope.currentTab2 = 0 : $scope.currentTab2 -= 1;
    }

});