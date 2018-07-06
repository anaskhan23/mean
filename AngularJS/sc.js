
	var app= angular.module("studentApp",[]);
	app.controller("studentCtrl", function($scope){
		$scope.student=[{
			name:"Ramya",
			subjects:[
			{name:'Corejava',marks:70},
			{name:'Nodejs',marks:80},
			{name:'Mongodb',marks:65},
			],
			total:function () {
				sum=0;
				for(i=0; i<$scope.student[0].subjects.length; i++){
			sum += $scope.student[0].subjects[i].marks;
				// body...
			}
			return sum;
		},
		average:function(){
return $scope.student[0].total()/$scope.student[0].subjects.length;
		return $scope.avg;


		}
	},
		{
			name:"John",
			subjects:[
			{name:'Corejava',marks:80},
			{name:'Nodejs',marks:90},
			{name:'Mongodb',marks:75},
			],
			total:function () {
				sum=0;
				for(i=0; i<$scope.student[1].subjects.length; i++){
			sum += $scope.student[1].subjects[i].marks;
				// body...
			}
			return sum;
		},
		average:function(){
return $scope.student[1].total()/$scope.student[1].subjects.length;
		return $scope.avg;


		}
		}];
		$scope.Greatest=function(){
			var avg1=$scope.student[0].average();
			var avg2=$scope.student[1].average();
			if(avg1>avg2)
			{
				return avg1;
			}
			else
			{
				return avg2;
			}
		}
});
			