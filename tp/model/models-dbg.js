sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	function toTreeTableType(tree) {
		var result = tree.reduce(function (acc, el, index) {
			acc[index] = el;
			if (el.next) {
				Object.assign(acc[index], toTreeTableType(el.next));
				delete el.next;
			}
			return acc;
		}, {});

		return result;
	}

	return {
		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createLocalModel: function () {
			var oModel = new JSONModel("model/local.json");
			oModel.attachRequestCompleted(function () {
				oModel.setProperty("/tree", toTreeTableType(oModel.getProperty("/tree")));
			});
			return oModel;
		}
	};
});