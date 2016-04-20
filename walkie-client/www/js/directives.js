angular.module('chat.directives', [])

// http://fdietz.github.io/recipes-with-angular-js/common-user-interface-patterns/editing-text-in-place-using-html5-content-editable.html
.directive("contenteditable", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function() {
                element.html(ngModel.$viewValue || "");
            };

            element.bind("blur keyup change", function() {
                scope.$apply(read);
            });
        }
    };
})

.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
            if(event.which === 75 && event.metaKey === true) {
                scope.$apply(function (){
                    scope.clearMessages();
                });
                event.preventDefault();
            }
            if(event.which === 38) {
                scope.$apply(function (){
                    scope.stepBackThroughHistory();
                });
                event.preventDefault();
            }
        });
    };
})

;
