sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sapui5.ep.istocks12',
            componentId: 'zz_pv_stock_maraList',
            contextPath: '/zz_pv_stock_mara'
        },
        CustomPageDefinitions
    );
});