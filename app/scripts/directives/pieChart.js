'use strict';

angular.module('todoApp').
directive('pieChart', function() {
  var template = '<canvas id="myChart" width="400" height="400"></canvas>';

  var link = function(scope, element, attrs){

    var ctx = element.children()[0].getContext("2d");
          var myPieChart;
          function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }

          function buildChart(todos){
            var hash = {};
            var data = [];

            angular.forEach(todos,function(value,key){
              var priority = value.priority;
              if (typeof priority === 'string') priority = parseInt(priority, 10);
              hash[priority] = hash[priority] || 1;
              hash[priority]++;
            });
            angular.forEach(hash,function(value,key){
              data.push({
                  value: value,
                  color: getRandomColor(),
                  label: key
              });
            });
            console.log('data',data);
            myPieChart = new Chart(ctx).Pie(data);
          }

          scope.$watch('data', function() {
            console.log('watch',scope.data);
            buildChart(scope.data);
          });

          buildChart(scope.data);

  }

  return {
    template: template,
    scope: {
      data: '=data'
    },
    link: link
  }
})
