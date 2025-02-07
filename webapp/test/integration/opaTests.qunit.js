sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapui5/ep/istocks12/test/integration/FirstJourney',
		'sapui5/ep/istocks12/test/integration/pages/zz_pv_stock_maraList',
		'sapui5/ep/istocks12/test/integration/pages/zz_pv_stock_maraObjectPage',
		'sapui5/ep/istocks12/test/integration/pages/zz_pv_stock_zite_itecObjectPage'
    ],
    function(JourneyRunner, opaJourney, zz_pv_stock_maraList, zz_pv_stock_maraObjectPage, zz_pv_stock_zite_itecObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapui5/ep/istocks12') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezz_pv_stock_maraList: zz_pv_stock_maraList,
					onThezz_pv_stock_maraObjectPage: zz_pv_stock_maraObjectPage,
					onThezz_pv_stock_zite_itecObjectPage: zz_pv_stock_zite_itecObjectPage
                }
            },
            opaJourney.run
        );
    }
);