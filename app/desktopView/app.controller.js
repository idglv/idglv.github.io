(function() {
  "use strict";

  sap.ui.controller("sap.app.desktopView.app", {
    onInit: function() {
      var aColumnData = [{
        columnId: "id",
        columnText: "Идентификатор",
        width: "20%"
      }, {
        columnId: "short",
        columnText: "Наименование краткое",
        width: "25%"
      }, {
        columnId: "name",
        columnText: "Наименование полное",
        width: "35%"
      }, {
        columnId: "tag",
        columnText: "Ключевые слова",
        width: "20%"
      }];

      var oModel = new sap.ui.model.json.JSONModel();

      sap.app.util.rawToTree(function(tree) {
        oModel.setData({
          columns: aColumnData,
          rows: sap.app.util.tableGenerator(300),
          tree: tree
        });

        this.getView().setModel(oModel);
      }.bind(this));

      this.cache();
    },

    cache: function() {
      this.mainTable = this.getView().byId("mainTable");
    },

    handleSelectTree: function(e) {
      var key = e.getParameter("node").data("key");

      this.mainTable.bindAggregation("rows", {
        path: "/rows",
        sorter: [new sap.ui.model.Sorter("id", false)],
        filters: [new sap.ui.model.Filter("key", "EQ", key)]
      });
    }
  });

})()