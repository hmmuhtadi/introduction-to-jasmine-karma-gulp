var SelectMetrics = function () {
    var pub = {}; //public
    var pri = {}; //private
    
    var viewModel = (function () {
        var self = {};
        self.maxMetricCount = 8;
        self.minMetricCount = 1;
        self.WidgetId = "";
        self.metricGroups = ko.observableArray([]);
        self.availableMetrics = ko.observableArray([]);
        self.savedAvailabelMetrics = ko.observableArray([]);
        self.selectedMetrics = ko.observableArray([]);
        self.savedSelectedMetrics = ko.observableArray([]);
        self.errorMessage = ko.observable("");
        self.leftSelectedCount = ko.observable(0);
        self.rightSelectedCount = ko.observable(0);

        self.addRestriction = ko.computed(function () {
            //return ((self.selectedMetrics().length + self.leftSelectedCount()) > 8) || (self.selectedMetrics().length == 8);
            return ((self.selectedMetrics().length + self.leftSelectedCount()) > self.maxMetricCount) || (self.selectedMetrics().length === self.maxMetricCount);

        }, this);

        self.removeRestriction = ko.computed(function () {
            //return ((self.selectedMetrics().length - self.rightSelectedCount()) < 1) || (self.selectedMetrics().length == 1);
            return ((self.selectedMetrics().length - self.rightSelectedCount()) < self.minMetricCount) || (self.selectedMetrics().length === self.minMetricCount);
        }, this);

        self.availableMetricOnClick = function (selectedMetric, event) {
            pri.arrayOperations.clearObservableArray(self.selectedMetrics, self.rightSelectedCount);
            pri.metricOperations.metricOnClick(self.availableMetrics, selectedMetric, self.leftSelectedCount, event);
        };

        self.selectedMetricOnClick = function (selectedMetric, event) {
            pri.arrayOperations.clearObservableArray(self.availableMetrics, self.leftSelectedCount);
            pri.metricOperations.metricOnClick(self.selectedMetrics, selectedMetric, self.rightSelectedCount, event);
        };

        self.addMetricsOnClick = function () {
            pri.metricOperations.addRemoveMetrics(self.availableMetrics, self.selectedMetrics, self.leftSelectedCount, self.rightSelectedCount);
        };

        self.removeMetricsOnClick = function () {
            pri.metricOperations.addRemoveMetrics(self.selectedMetrics, self.availableMetrics, self.rightSelectedCount, self.leftSelectedCount);
        };

        self.moveUpOnClick = function () {
            pri.metricOperations.moveMetric("Up", self.selectedMetrics);
        };

        self.moveDownOnClick = function () {
            pri.metricOperations.moveMetric("Down", self.selectedMetrics);
        };

        self.acceptOnClick = function () {
            alert("Success fully saved");
        };

        self.cancelOnClick = function () {
            self.availableMetrics(self.savedAvailabelMetrics().slice(0));
            self.selectedMetrics(self.savedSelectedMetrics().slice(0));
            pri.metricOperations.hide(self);
        };

        return self;
    })();
    
    pri.metricOperations = function () {
        var self = this;
        
        self.metricOnClick = function (metricList, selectedMetric, selectedMetricCount, event) {

            // if the ctrl  is not pressed
            if (!event.ctrlKey) {
                $.each(metricList(), function (index, metric) {
                    if (metric != selectedMetric && metric.IsSelected()) {
                        //deselect other metrics
                        metric.IsSelected(false);
                    }
                });
                selectedMetric.IsSelected(true);
                selectedMetricCount(1);
            } else {
                //invert the selection
                selectedMetric.IsSelected(selectedMetric.IsSelected() ? false : true);
                //if the metric is currently selected, the increse the counter; else decrease
                var delta = selectedMetric.IsSelected() ? 1 : -1;
                selectedMetricCount(selectedMetricCount() + delta);
            }
        };
        
        self.addRemoveMetrics = function (sourceMetricList, destinationMetricList, sourceSelectedCount, destinationSelectedCount) {
            pri.arrayOperations.clearObservableArray(destinationMetricList, destinationSelectedCount);
            var movedMetricsCount = 0;

            for (var index = 0; index < sourceMetricList().length; index++) {
                var metric = sourceMetricList()[index];

                if (metric.IsSelected()) {
                    destinationMetricList.push(metric);
                    sourceMetricList.remove(metric);
                    movedMetricsCount++;
                    //since we are removing the object, the next element will shift up to this index. So we need to check the same index for the next element
                    index--;
                }
            }

            sourceMetricList(sourceMetricList());
            destinationMetricList(destinationMetricList());
            sourceSelectedCount(0);
            destinationSelectedCount(movedMetricsCount);
            return movedMetricsCount;
        };
        
        self.moveMetric = function (direction, metricList) {

            if (direction === "Down") {
                metricList(metricList().reverse());
            }

            for (var index = 0; index < metricList().length; index++) {
                var metric = metricList()[index];
                if (metric.IsSelected()) {
                    var success = pri.arrayOperations.moveElement(metricList, index, -1);

                    if (!success) {
                        break;
                    }
                }
            }

            if (direction === "Down") {
                metricList(metricList().reverse());
            }

            metricList(metricList());
        };
        
        self.hide = function (model) {
            pri.selectMetricsHelper.clearObservables(model);
            //Helper.hideWidget(model.WidgetId);
        };

        return self;
    }();

    pri.arrayOperations = function () {
        var self = this;

        self.initilizeArray = function(array, data) {
            $.each(data, function(index, item) {
                //adding a dynamic property'IsSelected'. this indicated whether user has selected this metric to add/remove/move or not
                item.IsSelected = ko.observable(false);
            });
            array(data);
        };

        self.clearObservableArray = function(metricList, selectedCount) {
            $.each(metricList(), function(index, metric) {
                metric.IsSelected(false);
            });
            selectedCount(0);
        };
        
        self.moveElement = function (metricList, indexFrom, delta) {

            var indexTo = indexFrom + delta;
            // Make sure the index is within the array bounds
            if (!Helper.checkArrayBounds(metricList().length, indexFrom) || !Helper.checkArrayBounds(metricList().length, indexTo) || (indexTo == indexFrom)) {
                return false;
            }

            var temp = metricList()[indexTo];
            metricList()[indexTo] = metricList()[indexFrom];
            metricList()[indexFrom] = temp;

            return true;
        };
        
        return self;
    }();

    pri.selectMetricsHelper = function() {
        var self = this;

        self.parseData = function(data) {
            data = data.replace(/&quot;/g, '"');
            data = JSON.parse(data);
            return data;
        };

        self.getJson = function(selectedMetricList) {
            var json = new Array();
            $.each(selectedMetricList(), function(index, metric) {
                json.push(metric.MetricName);
            });
            return json;
        };

        self.clearObservables = function(model) {
            pri.arrayOperations.clearObservableArray(model.availableMetrics, model.leftSelectedCount);
            pri.arrayOperations.clearObservableArray(model.selectedMetrics, model.rightSelectedCount);
            model.errorMessage("");
        };
        
        self.checkDataValidation = function (data) {
            
            if (data.WidgetId == undefined) {
                throw new Error("WidgetID is not defined in data!");
            }
            
            if (data.MetricGroups == undefined) {
                throw new Error("MetricGroups is not defined in data!");
            }

            if (data.AvailableMetrics == undefined) {
                throw new Error("AvailableMetrics is not defined in data!");
            }
            
            if (data.AvailableMetrics == undefined) {
                throw new Error("SelectedMetrics is not defined in data!");
            }
        };


        return self;
    }();
    
    pub.initialize = function (data) {

        pri.selectMetricsHelper.checkDataValidation(data);
        var model = viewModel;
        //data = metricHelper.parseData(data);
        model.WidgetId = data.WidgetId;
        model.metricGroups(data.MetricGroups);
        model.savedAvailabelMetrics(Helper.cloneArray(data.AvailableMetrics));
        model.savedSelectedMetrics(Helper.cloneArray(data.SelectedMetrics));
        pri.arrayOperations.initilizeArray(model.availableMetrics, data.AvailableMetrics);
        pri.arrayOperations.initilizeArray(model.selectedMetrics, data.SelectedMetrics);
       
        ko.applyBindings(model, $(model.WidgetId)[0]);

    };
    
    return pub;
}();

