sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";

	var INDICATOR_CSS = "tp-indicator";

	var indicatorType = {
		PlanEnhance: "PlanEnhance",
		PlanReduction: "PlanReduction",
		FullPosition: "FullPosition",
		VacantPosition: "VacantPosition",
		Plan: "Plan",
		Empty: "Empty"
	};

	var mapIndicatorTypeCss = {
		"PlanEnhance": "tp-indicator_plan-enhance",
		"PlanReduction": "tp-indicator_plan-reduction",
		"FullPosition": "tp-indicator_full-position",
		"VacantPosition": "tp-indicator_vacant-position",
		"Plan": "tp-indicator_plan",
		"Empty": "tp-indicator_empty"
	};

	function indicatorTypeToClass(indType) {
		return mapIndicatorTypeCss[indType];
	}

	return Control.extend("tp.TrainingProgram.control.Indicator", {
		metadata: {
			properties: {
				type: {
					type: "string",
					defaultValue: indicatorType.Empty
				}
			}
		},

		renderer: function (oRM, oControl) {
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addClass(INDICATOR_CSS);
			oRM.addClass(indicatorTypeToClass(oControl.getType()));
			oRM.writeClasses();
			oRM.write(">");
			oRM.write("</div>");
		}
	});

});