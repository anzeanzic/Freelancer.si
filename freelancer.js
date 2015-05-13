angular.module('app', []);
angular.module('app').controller('AppController', function($scope) {
	$scope.webpage = false;
	$scope.angular = false;
	$scope.query = false;
	$scope.choices = [{ name: "Spletna stran", id: 1}, { name: "AngularJS", id: 2}, { name: "Svetovanje", id: 3}];

	$scope.$watch('selectedObject', function(newValue) {
		if (newValue != undefined) {
			$scope.webpage = false;
			$scope.angular = false;
			$scope.query = false;

			switch (newValue.id) {
				case 1:
					$scope.webpage = true;
					break;
				case 2:
					$scope.angular = true;
					break;
				case 3:
					$scope.query = true;
					break;
			}
		}
	});

	$scope.submitForm = function() {
		alert("Obrazec uspesno oddan!")
	}
});