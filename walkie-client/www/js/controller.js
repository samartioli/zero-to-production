angular.module('chat.controller', [])

.controller('ChatCtrl', function($scope, $ionicScrollDelegate, $window) {

    // $window.socket = io('localhost:3000');
    $window.socket = io('http://45.55.176.122:3000');

    $window.socket.on('connect', function() {
        console.log('Socket Connection Created');
        $window.socket.on('message', function(message) {
            $scope.messages.push(message);
            $scope.$apply();
            $ionicScrollDelegate.scrollBottom();
         });
    });

    $scope.user = {
        name: 'sam',
        message: '',
    };

    $scope.submitName = function() {
        $scope.userName = $scope.user.name;
    }

    $scope.messages = [];

    $scope.sendMessage = function() {

        if ($scope.user.message) {
            $window.socket.emit('message',  {
                origin: 'remote',
                who: $scope.user.name,
                what: $scope.user.message
            });
            $scope.messages.push({
                origin: 'local',
                who: $scope.user.name,
                what: $scope.user.message
            });
            $scope.user.message = '';
            $ionicScrollDelegate.scrollBottom();
        }
    }

})
