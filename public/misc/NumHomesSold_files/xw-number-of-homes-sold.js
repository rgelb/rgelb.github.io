var XomeWidgetsNumberOfHomesSold = /** @class */ (function () {
    function XomeWidgetsNumberOfHomesSold() {
        xwSetResponsiveClass();
        xwSetDefaultRange('.js-xw-wrapper-number-of-homes-sold');
        var returnedData;
        var chartNumberOfHomesSold;
        var timespan = parseInt($('.js-xw-wrapper-number-of-homes-sold').attr('data-default-range'));
        function generateChart(data, timespan, maxValueRounded) {
            var chartData = xwLimitDataRange(data, timespan, 'date', 'sold');
            var chartContainer = document.getElementById('xw-chart-container-number-of-homes-sold');
            chartNumberOfHomesSold = new Chart(chartContainer, {
                type: 'line',
                data: {
                    datasets: [{
                            backgroundColor: 'rgba(238, 228, 189, 0.6)',
                            borderColor: '#d8c68b',
                            borderWidth: 1,
                            data: chartData,
                            pointHitRadius: (timespan >= 4) ? 2 : 6,
                            pointRadius: 1
                        }]
                },
                options: {
                    animation: {
                        duration: 0
                    },
                    hover: {
                        animationDuration: 0
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                                ticks: {
                                    autoSkip: true
                                },
                                time: {
                                    unit: (timespan >= 3) ? 'year' : 'month'
                                },
                                type: 'time'
                            }],
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    callback: function (value) {
                                        return xwFormatNumber(value, null, null);
                                    },
                                    max: maxValueRounded,
                                    maxTicksLimit: 6
                                }
                            }]
                    },
                    tooltips: {
                        custom: function (tooltip) {
                            if (!tooltip)
                                return;
                            tooltip.displayColors = false;
                        },
                        callbacks: {
                            label: function (tooltipItem) {
                                var numberLabel = (parseInt(tooltipItem.yLabel) === 1) ? ' home sold' : ' homes sold';
                                return xwFormatNumber(tooltipItem.yLabel, null, null) + numberLabel;
                            },
                            title: function (tooltipItem) {
                                var date = new Date(tooltipItem[0].xLabel);
                                var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                var dateMonth = monthNames[date.getMonth()];
                                var dateDay = date.getDate();
                                var dateYear = date.getFullYear();
                                return dateMonth + ' ' + dateDay + ', ' + dateYear;
                            }
                        },
                        titleFontStyle: 'normal'
                    }
                }
            });
        }
        var $numberOfHomesSoldGraph = $('.js-xw-number-of-homes-sold-graph');
        var apiUrl = $numberOfHomesSoldGraph.attr('data-api-url');
        var streetAddress = $numberOfHomesSoldGraph.attr('data-street-address');
        var zipCode = $numberOfHomesSoldGraph.attr('data-zip-code');
        
        var response = {
  "events": [
    {
      "date": "2015-04-01T00:00:00",
      "active": 207,
      "sold": 74,
      "availableSupply": 2.8
    },
    {
      "date": "2015-05-01T00:00:00",
      "active": 269,
      "sold": 74,
      "availableSupply": 3.6
    },
    {
      "date": "2015-06-01T00:00:00",
      "active": 258,
      "sold": 94,
      "availableSupply": 2.7
    },
    {
      "date": "2015-07-01T00:00:00",
      "active": 220,
      "sold": 98,
      "availableSupply": 2.2
    },
    {
      "date": "2015-08-01T00:00:00",
      "active": 213,
      "sold": 76,
      "availableSupply": 2.8
    },
    {
      "date": "2015-09-01T00:00:00",
      "active": 202,
      "sold": 74,
      "availableSupply": 2.7
    },
    {
      "date": "2015-10-01T00:00:00",
      "active": 200,
      "sold": 94,
      "availableSupply": 2.1
    },
    {
      "date": "2015-11-01T00:00:00",
      "active": 193,
      "sold": 62,
      "availableSupply": 3.1
    },
    {
      "date": "2015-12-01T00:00:00",
      "active": 186,
      "sold": 100,
      "availableSupply": 1.9
    },
    {
      "date": "2016-01-01T00:00:00",
      "active": 185,
      "sold": 60,
      "availableSupply": 3.1
    },
    {
      "date": "2016-02-01T00:00:00",
      "active": 183,
      "sold": 66,
      "availableSupply": 2.8
    },
    {
      "date": "2016-03-01T00:00:00",
      "active": 116,
      "sold": 74,
      "availableSupply": 1.6
    },
    {
      "date": "2016-04-01T00:00:00",
      "active": 124,
      "sold": 74,
      "availableSupply": 1.7
    },
    {
      "date": "2016-05-01T00:00:00",
      "active": 125,
      "sold": 76,
      "availableSupply": 1.6
    },
    {
      "date": "2016-06-01T00:00:00",
      "active": 129,
      "sold": 74,
      "availableSupply": 1.7
    },
    {
      "date": "2016-07-01T00:00:00",
      "active": 133,
      "sold": 43,
      "availableSupply": 3.1
    },
    {
      "date": "2016-08-01T00:00:00",
      "active": 119,
      "sold": 43,
      "availableSupply": 2.8
    },
    {
      "date": "2016-09-01T00:00:00",
      "active": 106,
      "sold": 33,
      "availableSupply": 3.2
    },
    {
      "date": "2016-10-01T00:00:00",
      "active": 107,
      "sold": 41,
      "availableSupply": 2.6
    },
    {
      "date": "2016-11-01T00:00:00",
      "active": 112,
      "sold": 31,
      "availableSupply": 3.6
    },
    {
      "date": "2016-12-01T00:00:00",
      "active": 89,
      "sold": 41,
      "availableSupply": 2.2
    },
    {
      "date": "2017-01-01T00:00:00",
      "active": 97,
      "sold": 31,
      "availableSupply": 3.1
    },
    {
      "date": "2017-02-01T00:00:00",
      "active": 104,
      "sold": 22,
      "availableSupply": 4.7
    },
    {
      "date": "2017-03-01T00:00:00",
      "active": 126,
      "sold": 43,
      "availableSupply": 2.9
    },
    {
      "date": "2017-04-01T00:00:00",
      "active": 108,
      "sold": 25,
      "availableSupply": 4.3
    },
    {
      "date": "2017-05-01T00:00:00",
      "active": 153,
      "sold": 45,
      "availableSupply": 3.4
    },
    {
      "date": "2017-06-01T00:00:00",
      "active": 141,
      "sold": 36,
      "availableSupply": 3.9
    },
    {
      "date": "2017-07-01T00:00:00",
      "active": 123,
      "sold": 40,
      "availableSupply": 3.1
    },
    {
      "date": "2017-08-01T00:00:00",
      "active": 110,
      "sold": 42,
      "availableSupply": 2.6
    },
    {
      "date": "2017-09-01T00:00:00",
      "active": 102,
      "sold": 41,
      "availableSupply": 2.5
    },
    {
      "date": "2017-10-01T00:00:00",
      "active": 106,
      "sold": 32,
      "availableSupply": 3.3
    },
    {
      "date": "2017-11-01T00:00:00",
      "active": 97,
      "sold": 41,
      "availableSupply": 2.4
    },
    {
      "date": "2017-12-01T00:00:00",
      "active": 80,
      "sold": 39,
      "availableSupply": 2.1
    },
    {
      "date": "2018-01-01T00:00:00",
      "active": 84,
      "sold": 24,
      "availableSupply": 3.5
    },
    {
      "date": "2018-02-01T00:00:00",
      "active": 96,
      "sold": 23,
      "availableSupply": 4.2
    },
    {
      "date": "2018-03-01T00:00:00",
      "active": 101,
      "sold": 28,
      "availableSupply": 3.6
    },
    {
      "date": "2018-04-01T00:00:00",
      "active": 109,
      "sold": 28,
      "availableSupply": 3.9
    },
    {
      "date": "2018-05-01T00:00:00",
      "active": 120,
      "sold": 43,
      "availableSupply": 2.8
    },
    {
      "date": "2018-06-01T00:00:00",
      "active": 118,
      "sold": 36,
      "availableSupply": 3.3
    },
    {
      "date": "2018-07-01T00:00:00",
      "active": 140,
      "sold": 28,
      "availableSupply": 5
    },
    {
      "date": "2018-08-01T00:00:00",
      "active": 140,
      "sold": 35,
      "availableSupply": 4
    },
    {
      "date": "2018-09-01T00:00:00",
      "active": 139,
      "sold": 45,
      "availableSupply": 3.1
    },
    {
      "date": "2018-10-01T00:00:00",
      "active": 136,
      "sold": 35,
      "availableSupply": 3.9
    },
    {
      "date": "2018-11-01T00:00:00",
      "active": 129,
      "sold": 22,
      "availableSupply": 5.9
    },
    {
      "date": "2018-12-01T00:00:00",
      "active": 131,
      "sold": 31,
      "availableSupply": 4.2
    },
    {
      "date": "2019-01-01T00:00:00",
      "active": 161,
      "sold": 20,
      "availableSupply": 8
    },
    {
      "date": "2019-02-01T00:00:00",
      "active": 153,
      "sold": 24,
      "availableSupply": 6.4
    },
    {
      "date": "2019-03-01T00:00:00",
      "active": 206,
      "sold": 28,
      "availableSupply": 7.4
    }
  ],
  "streetAddress": null,
  "city": null,
  "state": null,
  "zip": "92649",
  "evaluatedOn": "2019-05-01T00:00:00"
};
            
        setTimeout(function() {
        
            returnedData = response.events.slice();
            // determine highest sold count in the entire JSON
            var maxValue = Math.max.apply(Math, returnedData.slice().map(function (item) {
                return item.sold;
            }));
            // round the highest sold count upwards to the nearest clean number
            var maxValueRounded = Math.ceil(maxValue / 20) * 20;
            $('.js-xw-chart-loader-container-number-of-homes-sold').hide();
            generateChart(response.events, timespan, maxValueRounded);
            $('.js-xw-wrapper-number-of-homes-sold').addClass('xw-widget-fully-loaded');        
        
        }, 250);


        
        
        
        $('.js-xw-wrapper-number-of-homes-sold .js-xw-range-item').on('click', function refreshChartWithNewRange() {
            var clickedRange = parseInt($(this).attr('data-range'));
            var dataSet = returnedData.slice();
            var limitedData = xwLimitDataRange(dataSet, clickedRange, 'date', 'sold');
            chartNumberOfHomesSold.data.datasets[0].data = limitedData;
            if (clickedRange >= 3) {
                chartNumberOfHomesSold.options.scales.xAxes[0].time.unit = 'year';
            }
            else {
                chartNumberOfHomesSold.options.scales.xAxes[0].time.unit = 'month';
            }
            if (clickedRange >= 4) {
                chartNumberOfHomesSold.data.datasets[0].pointHitRadius = 2;
            }
            else {
                chartNumberOfHomesSold.data.datasets[0].pointHitRadius = 6;
            }
            chartNumberOfHomesSold.update(0);
        });
        xwSetResponsiveClass();
    }
    return XomeWidgetsNumberOfHomesSold;
}());
var xomeWidgetsNumberOfHomesSoldInstance = new XomeWidgetsNumberOfHomesSold();
//# sourceMappingURL=xw-number-of-homes-sold.js.map