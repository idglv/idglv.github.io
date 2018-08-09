sap.ui.define([

], function () {
	"use strict";

	return {
		color: function (c) {
			switch (c) {
			case "green":
				return "green";
			case "red":
				return "red";
			default:
				return "black";
			}
		}
	};
});