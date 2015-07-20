sap.ui.jsview("sap.app.view.main", {
  getControllerName: function() {
    return "sap.app.view.main";
  },

  createContent: function(oController) {
    this.setDisplayBlock(true);

    return new sap.m.SplitApp("splitApp", {});
  }

});