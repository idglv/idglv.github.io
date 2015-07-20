sap.ui.controller("sap.app.view.welcome", {
  onInit: function() {
    sap.ui.getCore().getEventBus().subscribe("table", "filter", this.changeFilter, this);

    var oModel = new sap.ui.model.json.JSONModel({
      table: sap.app.util.tableGenerator(300)
    });
    this.getView().setModel(oModel);

    this.cache();
  },

  cache: function() {
    this.table = this.getView().byId("table");
  },

  changeFilter: function(sChannel, sEvent, oData) {
    var key = oData;
    this.table.bindAggregation("items", {
      path: "/table",
      template: this.oTemplate,
      filters: [new sap.ui.model.Filter("key", "EQ", key)]
    })
  },

  onExit: function() {
    sap.ui.getCore().getEventBus().unsubscribe("table", "filter", this.changeFilter, this);
  }
});