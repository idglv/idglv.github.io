sap.ui.jsview("sap.app.view.welcome", {
  getControllerName: function() {
    return "sap.app.view.welcome";
  },

  createContent: function(oController) {
    var oColumns = [new sap.m.Column({
      header: new sap.m.Label({
        text: "Идентификатор"
      })
    }), new sap.m.Column({
      header: new sap.m.Label({
        text: "Наименование краткое"
      })
    }), new sap.m.Column({
      header: new sap.m.Label({
        text: "Наименование полное"
      })
    }), new sap.m.Column({
      header: new sap.m.Label({
        text: "Ключевые слова"
      })
    })];

    oController.oTemplate = new sap.m.ColumnListItem({
      cells: [
        new sap.m.Text({
          text: "{id}",
          wrapping: false
        }),
        new sap.m.Text({
          text: "{short}",
          wrapping: false
        }),
        new sap.m.Text({
          text: "{name}",
          wrapping: false
        }),
        new sap.m.Text({
          text: "{tag}",
          wrapping: false
        })
      ]
    });

    return new sap.m.Page({
      title: "Объекты",
      content: [
        new sap.m.Table(this.createId("table"), {
          growingThreshold: 10,
          growingScrollToLoad: false,
          columns: oColumns
        })
      ]
    });
  }

});