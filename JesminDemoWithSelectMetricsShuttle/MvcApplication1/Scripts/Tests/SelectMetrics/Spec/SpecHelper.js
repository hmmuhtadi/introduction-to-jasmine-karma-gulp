//beforeEach(function() {
//  addMatchers({
//    toBePlaying: function(expectedSong) {
//      var player = this.actual;
//      return player.currentlyPlayingSong === expectedSong && 
//             player.isPlaying;
//    }
//  });
//});


var dummy = function () {
    var pub = this;


    pub.MetricGroups = [
        { "GroupName": "Perception, Awareness & Intention" },
        { "GroupName": "Performance" },
        { "GroupName": "Real World Delivery" },
        { "GroupName": "Share of access" },
        { "GroupName": "Share of Science" },
        { "GroupName": "Share of voice" },
        { "GroupName": "Source of Business" },
        { "GroupName": "Standard of Care" }];

    pub.AllMetrics = [
        { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
        { "GroupName": "Perception, Awareness & Intention", "MetricName": "# of payers aware of attributes", "MetricValue": "# of payers aware of attributes" },
        { "GroupName": "Perception, Awareness & Intention", "MetricName": "# of physicians aware of attributes", "MetricValue": "# of physicians aware of attributes" },
        { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
        { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
        { "GroupName": "Source of Business", "MetricName": "% of patients treated with defined characteristics", "MetricValue": "% of patients treated with defined characteristics" },
        { "GroupName": "Source of Business", "MetricName": "% of patients treated with drug", "MetricValue": "% of patients treated with drug" },
        { "GroupName": "Source of Business", "MetricName": "% of prevalent patients", "MetricValue": "% of prevalent patients" },
        { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
        { "GroupName": "Share of Science", "MetricName": "% share of trials in Phase 3b&4", "MetricValue": "% share of trials in Phase 3b&4" },
        { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
        { "GroupName": "Share of voice", "MetricName": "Account plan execution by stakeholders", "MetricValue": "Account plan execution by stakeholders" },
        { "GroupName": "Performance", "MetricName": "Average price achieved vs. Target price", "MetricValue": "Average price achieved vs. Target price" },
        { "GroupName": "Source of Business", "MetricName": "Diagnosis rate", "MetricValue": "Diagnosis rate" },
        { "GroupName": "Performance", "MetricName": "Market share (volume)", "MetricValue": "Market shate (volume)" },
        { "GroupName": "Performance", "MetricName": "Market share growth (volume)", "MetricValue": "Market share growth (volume)" },
        { "GroupName": "Performance", "MetricName": "Marketing contribution as % of sales", "MetricValue": "Marketing contribution as % of sales" },
        { "GroupName": "Performance", "MetricName": "Marketing expenditure vs. budget", "MetricValue": "Marketing expenditure vs. budget" },
        { "GroupName": "Source of Business", "MetricName": "NULL% of patients treated with NVS drug", "MetricValue": "% of patients treated with NVS drug" },
        { "GroupName": "Share of access", "MetricName": "Number of patients in aacclary statusounts by formu", "MetricValue": "Number of patients in aacclary statusounts by formu" },
        { "GroupName": "Source of Business", "MetricName": "Patient information ratio", "MetricValue": "Patient information ratio" },
        { "GroupName": "Source of Business", "MetricName": "Patient share by indication", "MetricValue": "Patient share by indication" },
        { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
        { "GroupName": "Perception, Awareness & Intention", "MetricName": "Physician ranking of defined attributes", "MetricValue": "Physician ranking of defined attributes" },
        { "GroupName": "Perception, Awareness & Intention", "MetricName": "Physicians adoption by stage", "MetricValue": "Physicians adoption by stage" },
        { "GroupName": "Performance", "MetricName": "Sales growth (value)", "MetricValue": "Sales growth (value)" },
        { "GroupName": "Performance", "MetricName": "Sales growth (volume)", "MetricValue": "Sales growth (volume)" },
        { "GroupName": "Performance", "MetricName": "Sales value vs. Target", "MetricValue": "Sales value vs. Target" },
        { "GroupName": "Performance", "MetricName": "Sales volume vs. Target", "MetricValue": "Sales volume vs. Target" },
        { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null },
        { "GroupName": "Performance", "MetricName": "Market share growth (value)", "MetricValue": null },
        { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null },
        { "GroupName": "Share of voice", "MetricName": "Share of sales force calls by detail position", "MetricValue": "Share of sales force calls by detail position" }
    ];


    pub.SelectedMetrics = [
        
    ];

    pub.WidgetId = "SelectMetrics";


    pub.data = {
        "MetricGroups": [
            { "GroupName": "Perception, Awareness & Intention" },
            { "GroupName": "Performance" },
            { "GroupName": "Real World Delivery" },
            { "GroupName": "Share of access" },
            { "GroupName": "Share of Science" },
            { "GroupName": "Share of voice" },
            { "GroupName": "Source of Business" },
            { "GroupName": "Standard of Care" }],
        "AvailableMetrics": [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "# of payers aware of attributes", "MetricValue": "# of payers aware of attributes" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "# of physicians aware of attributes", "MetricValue": "# of physicians aware of attributes" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Source of Business", "MetricName": "% of patients treated with defined characteristics", "MetricValue": "% of patients treated with defined characteristics" },
            { "GroupName": "Source of Business", "MetricName": "% of patients treated with drug", "MetricValue": "% of patients treated with drug" },
            { "GroupName": "Source of Business", "MetricName": "% of prevalent patients", "MetricValue": "% of prevalent patients" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of trials in Phase 3b&4", "MetricValue": "% share of trials in Phase 3b&4" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Share of voice", "MetricName": "Account plan execution by stakeholders", "MetricValue": "Account plan execution by stakeholders" },
            { "GroupName": "Performance", "MetricName": "Average price achieved vs. Target price", "MetricValue": "Average price achieved vs. Target price" },
            { "GroupName": "Source of Business", "MetricName": "Diagnosis rate", "MetricValue": "Diagnosis rate" },
            { "GroupName": "Performance", "MetricName": "Market share (volume)", "MetricValue": "Market shate (volume)" },
            { "GroupName": "Performance", "MetricName": "Market share growth (volume)", "MetricValue": "Market share growth (volume)" },
            { "GroupName": "Performance", "MetricName": "Marketing contribution as % of sales", "MetricValue": "Marketing contribution as % of sales" },
            { "GroupName": "Performance", "MetricName": "Marketing expenditure vs. budget", "MetricValue": "Marketing expenditure vs. budget" },
            { "GroupName": "Source of Business", "MetricName": "NULL% of patients treated with NVS drug", "MetricValue": "% of patients treated with NVS drug" },
            { "GroupName": "Share of access", "MetricName": "Number of patients in aacclary statusounts by formu", "MetricValue": "Number of patients in aacclary statusounts by formu" },
            { "GroupName": "Source of Business", "MetricName": "Patient information ratio", "MetricValue": "Patient information ratio" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by indication", "MetricValue": "Patient share by indication" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Physician ranking of defined attributes", "MetricValue": "Physician ranking of defined attributes" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Physicians adoption by stage", "MetricValue": "Physicians adoption by stage" },
            { "GroupName": "Performance", "MetricName": "Sales growth (value)", "MetricValue": "Sales growth (value)" },
            { "GroupName": "Performance", "MetricName": "Sales growth (volume)", "MetricValue": "Sales growth (volume)" },
            { "GroupName": "Performance", "MetricName": "Sales value vs. Target", "MetricValue": "Sales value vs. Target" },
            { "GroupName": "Performance", "MetricName": "Sales volume vs. Target", "MetricValue": "Sales volume vs. Target" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null },
            { "GroupName": "Performance", "MetricName": "Market share growth (value)", "MetricValue": null },
            { "GroupName": "Share of voice", "MetricName": "Share of sales force calls by detail position", "MetricValue": "Share of sales force calls by detail position" },
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }],
        
            
        "SelectedMetrics": [
            ],
        "WidgetId": "SelectMetrics"
    };
    
    pub.dataWith1SelectedMetric = {
        MetricGroups: [
            { "GroupName": "Perception, Awareness & Intention" },
            { "GroupName": "Performance" },
            { "GroupName": "Real World Delivery" },
            { "GroupName": "Share of access" },
            { "GroupName": "Share of Science" },
            { "GroupName": "Share of voice" },
            { "GroupName": "Source of Business" },
            { "GroupName": "Standard of Care" }],
        AvailableMetrics: [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null }
            ],

        SelectedMetrics: [
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }
        ],
        WidgetId: "#metrics-fixture"
    };
    
    pub.dataWith7SelectedMetrics = {
        MetricGroups: [
            { "GroupName": "Perception, Awareness & Intention" },
            { "GroupName": "Performance" },
            { "GroupName": "Real World Delivery" },
            { "GroupName": "Share of access" },
            { "GroupName": "Share of Science" },
            { "GroupName": "Share of voice" },
            { "GroupName": "Source of Business" },
            { "GroupName": "Standard of Care" }],
        AvailableMetrics: [
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null }
        ],

        SelectedMetrics: [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }
        ],
        WidgetId: "#metrics-fixture"
    };
    
    pub.dataWith8SelectedMetrics = {
        MetricGroups: [
            { "GroupName": "Perception, Awareness & Intention" },
            { "GroupName": "Performance" },
            { "GroupName": "Real World Delivery" },
            { "GroupName": "Share of access" },
            { "GroupName": "Share of Science" },
            { "GroupName": "Share of voice" },
            { "GroupName": "Source of Business" },
            { "GroupName": "Standard of Care" }],
        AvailableMetrics: [
        ],

        SelectedMetrics: [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null },
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }
        ],
        WidgetId: "#metrics-fixture"
    };
    
    pub.dataWithUndefinedWidgetId = {
        MetricGroups: [
            { "GroupName": "Perception, Awareness & Intention" },
            { "GroupName": "Performance" },
            { "GroupName": "Real World Delivery" },
            { "GroupName": "Share of access" },
            { "GroupName": "Share of Science" },
            { "GroupName": "Share of voice" },
            { "GroupName": "Source of Business" },
            { "GroupName": "Standard of Care" }],
        AvailableMetrics: [
        ],

        SelectedMetrics: [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null },
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }
        ]
    };

    pub.dataWithUndefinedMetricGroup = {
        AvailableMetrics: [
        ],

        SelectedMetrics: [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null },
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }
        ],
        WidgetId: "#metrics-fixture"
    };
    
    pub.dataWithUndefinedAvailableMetrics = {
        MetricGroups: [
            { "GroupName": "Perception, Awareness & Intention" },
            { "GroupName": "Performance" },
            { "GroupName": "Real World Delivery" },
            { "GroupName": "Share of access" },
            { "GroupName": "Share of Science" },
            { "GroupName": "Share of voice" },
            { "GroupName": "Source of Business" },
            { "GroupName": "Standard of Care" }],
       
        SelectedMetrics: [
            { "GroupName": "Share of access", "MetricName": " Share of accounts by formulary status", "MetricValue": " Share of accounts by formulary status" },
            { "GroupName": "Standard of Care", "MetricName": "% of doctors who describe your therapy as drug of choice", "MetricValue": "% of doctors who describe your therapy as drug of choice" },
            { "GroupName": "Real World Delivery", "MetricName": "% of patients complaint & staying on drug", "MetricValue": "% of patients complaint & staying on drug" },
            { "GroupName": "Share of voice", "MetricName": "% of share of voice in field force channels", "MetricValue": "% of share of voice in field force channels" },
            { "GroupName": "Share of Science", "MetricName": "% share of voice and publication vs. Comp", "MetricValue": "% share of voice and publication vs. Comp" },
            { "GroupName": "Source of Business", "MetricName": "Patient share by patient characteristics", "MetricValue": "Patient share by patient characteristics" },
            { "GroupName": "Perception, Awareness & Intention", "MetricName": "Payer ranking of defined attributes", "MetricValue": null },
            { "GroupName": "Performance", "MetricName": "Market share (value)", "MetricValue": null }
        ],
        WidgetId: "#metrics-fixture"
    };
    
   return pub;
}();

var SelectMetricsHtmlHelper = function () {
    var pub = this;

    pub.availableMetricsContainer =
           '<div id="available-metrics-container">'
         + '    <div class="metrics-title">'
         + '        Available metrics for executive overview'
         + '    </div>'
         + '    <div id="available-metrics">'
         + '        <ul class="group-metrics" data-bind="foreach: metricGroups">'
         + '            <li>'
         + '                <span data-bind="text: GroupName"></span>'
         + '                <ul class="metrics" data-bind="foreach: $parent.availableMetrics">'
         + "                    <li class='metric' data-bind='text: MetricName,if: GroupName == $parent.GroupName, click: $root.availableMetricOnClick, css:{&quot;selected-metric&quot;: IsSelected(), &quot;hidden-metric&quot;: GroupName != $parent.GroupName}'></li>"
         + '                </ul>'
         + '            </li>'
         + '        </ul>'
         + '    </div>'
         + '</div>';

    pub.selectedMetricsContainer =
          '<div id="selected-metrics-container">'
        + '     <div class="error-message">'
        + '         <span></span>'
        + '     </div>'
        + '     <div class="metrics-title">'
        + '         Displayed metrics (Max 8)'
        + '     </div>'
        + '     <div id="selected-metrics">'
        + '         <ul data-bind="foreach: selectedMetrics" id="selected-matrics" class="metrics">'
        + "             <li data-bind='click: $root.selectedMetricOnClick, text: MetricName, css:{&quot;selected-metric&quot;: IsSelected()}' class='metric'></li>"
        + '         </ul>'
        + '     </div>'
        + '</div>';

    pub.addRemoveButtonsContainer =
          ' <div id ="add-remove-metric-buttons" class="button-group">'
        + "     <button data-bind='click: addMetricsOnClick, disable: addRestriction, css:{&quot;disabled-button&quot;: addRestriction}'>Add&nbsp;&#8250;</button>"
        + "     <button data-bind='click: removeMetricsOnClick, disable: removeRestriction, css:{&quot;disabled-button&quot;: removeRestriction}'>&#8249;&nbsp;Remove</button>"
        + ' </div>';

    pub.moveMetricsButtonContainer =
        + ' <div id="move-metric-buttons" class="button-group">'
        + '     <button id="move-up" data-bind="click: moveUpOnClick">Move up &#8743;</button>'
        + '     <button id="move-down" data-bind="click: moveDownOnClick">Move down &#8744;</button>'
        + ' </div>';

    pub.acceptCancelButtonContainer =
        + ' <div id="accept-cancel-metric-buttons" class="button-group accept-button">'
        + '     <button data-bind="click: acceptOnClick">&#10003 Accept</button>'
        + '     <button data-bind="click: cancelOnClick">☓ Cancel</button>'
        + ' </div>';

    return pub;
}();