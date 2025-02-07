sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sapui5.ep.istocks12',
            componentId: 'zz_pv_stock_maraObjectPage',
            contextPath: '/zz_pv_stock_mara'
        },
        CustomPageDefinitions
    );
});