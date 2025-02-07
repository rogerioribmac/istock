sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            MessageToast.show("onPress");
            debugger;
        },

        onInit: function(oEvent){
            MessageToast.show("onInit");
            debugger;
        },

        onSectionLoaded: function(oSection){
            MessageToast.show("onSectionLoaded");
            debugger;
        },

        onSelectionChanged: function (oEvent) {
            debugger;
			var oSegment = oEvent.getParameter("segment");
			MessageToast.show("The selection changed: " + oSegment.getLabel() + " " + ((oSegment.getSelected()) ? "selected" : "not selected"));
		},

        press: function(oEvent){
            debugger;
        }
    };
});
