describe("Metrics", function() {
    var data;
    var outputId = "#metrics-fixture";
    var pub = this;
    pub.clearDomAndBindings = function () {
        
        //remove binding if already exists
        if ($(outputId)[0]) {
            ko.cleanNode($(outputId)[0]);
        }
        $(outputId).remove();
    };
    
    describe("when loaded", function () {
        beforeEach(function () {
            
            $("body").append($("#template-wrapper").html().replace("-template", ""));
            $(outputId).append(SelectMetricsHtmlHelper.selectedMetricsContainer.replace("&quot;", '"'));

            data = dummy.dataWith7SelectedMetrics;
            SelectMetrics.initialize(data);
        });

        afterEach(function () {
            pub.clearDomAndBindings();
        });

        it("at least 1 metric should be in selected metrics list", function () {
            var selectedMetricsCount = $('#selected-metrics li').length;
            expect(selectedMetricsCount).toBeGreaterThan(0);
        });
        
        describe("with 1 metric in selected metrics list", function () {
            beforeEach(function () {
                pub.clearDomAndBindings();

                $("body").append($("#template-wrapper").html().replace("-template", ""));
                $(outputId).append(SelectMetricsHtmlHelper.selectedMetricsContainer.replace("&quot;", '"'));
                $(outputId).append(SelectMetricsHtmlHelper.addRemoveButtonsContainer.replace("&quot;", '"'));

                data = dummy.dataWith1SelectedMetric;
                SelectMetrics.initialize(data);
            });

            afterEach(function () {
                pub.clearDomAndBindings();
            });

            it("remove metrics button should be disabled", function () {
                var removeMetricsButton = $('#add-remove-metric-buttons button').filter(":last");
                var isDisabled = removeMetricsButton.is(":disabled");
                expect(isDisabled).toBeTruthy();
            });
        });
        
        describe("with 8 metrics in selected metrics list", function () {
            beforeEach(function () {
                pub.clearDomAndBindings();
                
                $("body").append($("#template-wrapper").html().replace("-template", ""));
                $(outputId).append(SelectMetricsHtmlHelper.selectedMetricsContainer.replace("&quot;", '"'));
                $(outputId).append(SelectMetricsHtmlHelper.addRemoveButtonsContainer.replace("&quot;", '"'));

                data = dummy.dataWith8SelectedMetrics;
                SelectMetrics.initialize(data);
            });

            afterEach(function () {
                pub.clearDomAndBindings();
            });

            it("add metrics button should be disabled", function () {
                var addMetricsButton = $('#add-remove-metric-buttons button').filter(":first");
                var isDisabled = addMetricsButton.is(":disabled");
                expect(isDisabled).toBeTruthy();
            });
        });
    });
    
    describe("when clicked", function () {
        beforeEach(function () {
            $("body").append($("#template-wrapper").html().replace("-template", ""));
            $(outputId).append(SelectMetricsHtmlHelper.selectedMetricsContainer.replace("&quot;", '"'));
            $(outputId).append(SelectMetricsHtmlHelper.availableMetricsContainer.replace("&quot;", '"'));
            $(outputId).append(SelectMetricsHtmlHelper.addRemoveButtonsContainer.replace("&quot;", '"'));

            data = dummy.dataWith7SelectedMetrics;
            SelectMetrics.initialize(data);
        });

        afterEach(function () {
            pub.clearDomAndBindings();

        });

        it("on a metric should select that metric", function () {
            var selectedMetric = $('#selected-metrics li').filter(":last");
            selectedMetric.trigger('click');
            var selectedMetricCount = $('#selected-metrics li.selected-metric').length;
            expect(selectedMetricCount).toBe(1);
        });
        
        it("on add button should move the selected available metric to selected metrics list", function () {
            var selectedMetric = $('#available-metrics ul.metrics li.metric').filter(":first");
            var addMetricsButton = $('#add-remove-metric-buttons button').filter(":first");
            var initialSelectedMetricsCount = $('#selected-metrics li').length;
            
            selectedMetric.trigger('click');
            addMetricsButton.trigger('click');

            var finalSelectedMetricsCount = $('#selected-metrics li').length;
            expect(finalSelectedMetricsCount - initialSelectedMetricsCount).toBe(1);
        });
        
        it("on remove button should move the selected metric to available metrics list", function () {
            var selectedMetric = $('#selected-metrics li').filter(":last");
            var removeMetricsButton = $('#add-remove-metric-buttons button').filter(":last");
            var initialSelectedMetricCount = $('#selected-metrics li').length;

            selectedMetric.trigger('click');
            removeMetricsButton.trigger('click');

            var finalSelectedMetricCount = $('#selected-metrics li').length;
            expect(initialSelectedMetricCount - finalSelectedMetricCount).toBe(1);
        });

        describe("on move up button", function() {
            beforeEach(function () {
                pub.clearDomAndBindings();
                
                $("body").append($("#template-wrapper").html().replace("-template", ""));
                $(outputId).append(SelectMetricsHtmlHelper.selectedMetricsContainer.replace("&quot;", '"'));
                $(outputId).append(SelectMetricsHtmlHelper.moveMetricsButtonContainer.replace("&quot;", '"'));

                data = dummy.dataWith7SelectedMetrics;
                SelectMetrics.initialize(data);
            });

            afterEach(function () {
                pub.clearDomAndBindings();
            });
            
            it("should move the selected metric 1 step upward if not already on top of the list", function () {
                var initialIndexOfSelectedMatrix;
                var finalIndexOfSelectedMatrix;
                var metricToSelect = $('#selected-metrics li').filter(":last"); //selecting the bottom most element
                var moveUpButton = $('#move-up');

                metricToSelect.trigger('click');

                var selectedMetricsList = $('#selected-metrics li');
                initialIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                moveUpButton.trigger('click');

                selectedMetricsList = $('#selected-metrics li');
                finalIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);
                
                expect(initialIndexOfSelectedMatrix).toBeGreaterThan(finalIndexOfSelectedMatrix);
            });
            
            it("should not move the selected metric 1 step upward if it is already on top of the list", function () {
                var initialIndexOfSelectedMatrix;
                var finalIndexOfSelectedMatrix;
                var metricToSelect = $('#selected-metrics li').filter(":first");    //selecting the top most element
                var moveUpButton = $('#move-up');

                metricToSelect.trigger('click');

                var selectedMetricsList = $('#selected-metrics li');
                initialIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                moveUpButton.trigger('click');

                selectedMetricsList = $('#selected-metrics li');
                finalIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                expect(initialIndexOfSelectedMatrix).toBe(finalIndexOfSelectedMatrix);
            });

        });
        
        describe("on move down button", function () {
            beforeEach(function () {
                pub.clearDomAndBindings();

                $("body").append($("#template-wrapper").html().replace("-template", ""));
                $(outputId).append(SelectMetricsHtmlHelper.selectedMetricsContainer.replace("&quot;", '"'));
                $(outputId).append(SelectMetricsHtmlHelper.moveMetricsButtonContainer.replace("&quot;", '"'));

                data = dummy.dataWith7SelectedMetrics;
                SelectMetrics.initialize(data);
            });

            afterEach(function () {
                pub.clearDomAndBindings();
            });

            it("should move the selected metric 1 step down if not already on bottom of the list", function () {
                var initialIndexOfSelectedMatrix;
                var finalIndexOfSelectedMatrix;
                var metricToSelect = $('#selected-metrics li').filter(":first"); //selecting the top most element
                var moveDownButton = $('#move-down');

                metricToSelect.trigger('click');

                var selectedMetricsList = $('#selected-metrics li');
                initialIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                moveDownButton.trigger('click');

                selectedMetricsList = $('#selected-metrics li');
                finalIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                expect(finalIndexOfSelectedMatrix).toBeGreaterThan(initialIndexOfSelectedMatrix);
            });

            it("should not move the selected metric 1 step down if it is already on bottom of the list", function () {
                var initialIndexOfSelectedMatrix;
                var finalIndexOfSelectedMatrix;
                var metricToSelect = $('#selected-metrics li').filter(":last");    //selecting the bottom most element
                var moveDownButton = $('#move-down');

                metricToSelect.trigger('click');

                var selectedMetricsList = $('#selected-metrics li');
                initialIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                moveDownButton.trigger('click');

                selectedMetricsList = $('#selected-metrics li');
                finalIndexOfSelectedMatrix = getIndexOfSelectedMetric(selectedMetricsList);

                expect(initialIndexOfSelectedMatrix).toBe(finalIndexOfSelectedMatrix);
            });

        });

        function getIndexOfSelectedMetric(metricList) {
            var indexOfSelectedMatrix = -1;

            $.each(metricList, function (index, metric) {
                if (metric.className.indexOf('selected-metric') !== -1) {
                    indexOfSelectedMatrix = index;
                }
            });

            return indexOfSelectedMatrix;
        }
    });
    /*describe("When loaded with undefined data", function() {
        beforeEach(function () {
            pub.clearDomAndBindings();
        });

        afterEach(function () {
            pub.clearDomAndBindings();
        });

        it("should raise an error indicating which property is undefined", function () {
            data = dummy.dataWithUndefined;

            expect(function() {
                SelectMetrics.initialize(data);
            }).toThrow("WidgetID is not define in data!");

        });
    });*/
});


