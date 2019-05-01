var XomeWidgetsGlobal = /** @class */ (function () {
    function XomeWidgetsGlobal() {
        $(document).on('click', '.js-xw-expand-collapse', function () {
            $(this).closest('.js-xw-wrapper').toggleClass('xw-expanded');
        });
        $(document).on('click', '.js-xw-range-item', function changeRange() {
            $(this).addClass('xw-active').siblings('.js-xw-range-item.xw-active').removeClass('xw-active');
        });
    }
    return XomeWidgetsGlobal;
}());
var xomeWidgetsGlobalInstance = new XomeWidgetsGlobal();
function xwSetResponsiveClass() {
    $('.js-xw-wrapper').each(function () {
        var $widgetWrapper = $(this);
        var widgetWidth = $widgetWrapper.outerWidth(false);
        var breakSmall = parseInt($widgetWrapper.attr('data-break-small'));
        if (widgetWidth <= breakSmall) {
            $widgetWrapper.addClass('xw-break-small');
        }
        else {
            $widgetWrapper.removeClass('xw-break-small');
        }
    });
}
xwSetResponsiveClass();
$(window).on('load resize', function () {
    xwSetResponsiveClass();
});
function xwSetDefaultRange(wrapperClass) {
    var defaultRange = $(wrapperClass).attr('data-default-range');
    if (defaultRange !== 'undefined') {
        $(wrapperClass).find('.js-xw-range-item[data-range=' + defaultRange + ']').addClass('xw-active');
    }
}
function xwFormatPrice(value) {
    if (value < 1000000 && value > 999) {
        // format thousands
        return '$' + value.toString().slice(0, -3) + 'k';
    }
    else if (value >= 1000000) {
        // format millions
        var valueString = value.toString();
        var valueLength = valueString.length;
        return '$' + valueString.slice(0, -6) + '.' + valueString.slice(valueLength - 6, -4) + 'm';
    }
    else {
        return '$' + value;
    }
}
function xwFormatNumber(value, n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return value.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}
// cuts the data to what is needed for the selected time range
function xwLimitDataRange(data, timespan, xAxisLabel, yAxisLabel) {
    var xAxisRegex = new RegExp(xAxisLabel, 'g');
    var yAxisRegex = new RegExp(yAxisLabel, 'g');
    // convert axis labels to be compatible with Chart.js
    var graphData = JSON.parse(JSON.stringify(data).replace(xAxisRegex, 'x').replace(yAxisRegex, 'y'));
    var dataLength = data.length - 1;
    var currentTimestamp = Date.now();
    var minimumTimestamp = currentTimestamp - (timespan * 31556952000); // 31556952000 = 1 year in milliseconds
    for (var i = dataLength; i >= 0; --i) {
        var arrayItemTimestamp = new Date(graphData[i].x).getTime();
        if (arrayItemTimestamp < minimumTimestamp) {
            graphData.splice(i, 1);
        }
    }
    return graphData;
}
//# sourceMappingURL=xw-widgets-global.js.map