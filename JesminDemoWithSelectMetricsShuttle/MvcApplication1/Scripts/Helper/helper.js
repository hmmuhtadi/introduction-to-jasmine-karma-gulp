var Helper = function () {
	var me = this;

/*
	me.loadWidget = function (widgetId, element) {	    
		var containerId = '#widget-' + widgetId + '-view';		
		if ($(containerId).is(':empty')) {
			window.CommandCenter.setUIStateParameter('lazyLoadEnabled', '0');
			window.CommandCenter.loadWidget(widgetId);
			$(containerId).hide();
		}
		if ($(containerId).is(':visible')) {
		    $('div.nav-widget').hide();
		    $(element).find("b").removeClass("up-caret").addClass("down-caret");
		} else {
		    $('div.nav-widget').hide();
		    $(containerId).show();
		    $(element).find("b").removeClass("down-caret").addClass("up-caret");
		}
	};

    me.hideWidget = function(widgetId) {
        var containerId = '#widget-' + widgetId + '-view';
        var elementClass = '.nav-caret-' + widgetId;
        console.log(elementClass);
        console.log($(elementClass).children("b"));
        $(elementClass).children("b").addClass("down-caret").removeClass("up-caret");

        $(containerId).hide();
    };

    
*/

    me.checkArrayBounds = function(arrayLength, index) {

        if (index < 0 || index >= arrayLength) {
            return false;
        }

        return true;
    };

    me.cloneArray = function(array) {
        return array.slice(0);
    };
    
	return me;
}();