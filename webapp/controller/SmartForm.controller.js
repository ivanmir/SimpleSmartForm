sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	
	var ControllerController = Controller.extend("SimpleSmartForm.controller.SmartForm", {
		
		onInit: function() {
			
			// mock data
			var aResultData = [];
			for (var i = 1; i < 11; i++) {
				aResultData.push({
					"Id": i,
					"s_num": "" + i,
					"auart": "OData Service 'semi-real' data." + i,
					"ilart": Math.floor(Math.random() * (12345 * i)),
					"tplnr": Math.floor(Math.random() * (9876543210123456 * i)),
					"ktext": "SAPUI5, JQuery, JavaScript, Odata & Java." + i,
					"job_title": "Senior Developer." + i,
					"scope": "A." + i
				});
			}
			var oData = {
							ZCustom: aResultData
						};
			var oModel = new JSONModel();
			oModel.setData(oData);
			
			this.getView().setModel(oModel);
			
			this.getView().byId("__form1").bindElement({path:"/ZCustom/0"});

		},
		
		onNextPress: function (oEvent) {
			
			var sCurrentNum = this.getView().byId("__form1").getElementBinding().sPath;
			sCurrentNum = sCurrentNum.charAt(sCurrentNum.length - 1);
			sCurrentNum = parseInt(sCurrentNum, 10);
			var next = 0;
			
			if (sCurrentNum < 9) {
				next = sCurrentNum + 1;
			} else {
				next = 0;
			}
			
			var sPath = "/ZCustom/" + next;

			this.getView().byId("__form1").bindElement({path:sPath});
		}

	});

	return ControllerController;
});