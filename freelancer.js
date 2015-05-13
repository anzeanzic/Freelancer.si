/*
1 - izdelava spletnih strani
2 - povpraševanje po angularjs
3 - povpraševanje po svetovanju (textarea)

email - valid, req tel. št., poštno št., ime pa priimek

*/

angular.module('app', []);
angular.module('app').controller('AppController', function($scope) {
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


/*
Domaca naloga:
Uporabnik vpise datum odhoda, prihoda (navadne stevilke lahko), mora izbrati letalisce (maribor, lj, gradec), in pa kam hoce pride () in pa osebne podatke (email, ime, naslov). Ko izbere prihod in odhod,
mu prikaze ceno.

Do petka do tecaja

*/