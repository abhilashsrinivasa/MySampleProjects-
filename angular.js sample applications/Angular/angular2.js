var app=angular.module("simpleApp",[]);
app.controller("mathController",function($scope)
{
    
    $scope.square=function(value)
    {
        return value*value;
    };
});