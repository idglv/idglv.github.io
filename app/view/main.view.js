sap.ui.jsview("sap.app.view.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf testm.main
	*/ 
	getControllerName : function() {
		return "sap.app.view.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf testm.main
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);

        return new sap.m.SplitApp("splitApp", {
        	//mode: sap.m.SplitAppMode.StretchCompressMode
        });
	}

});