sap.ui.jsview("sap.app.view.welcome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.welcom
	*/ 
	getControllerName : function() {
		return "sap.app.view.welcome";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.welcom
	*/ 
	createContent : function(oController) {
		var oColumns = [new sap.m.Column({
			header : new sap.m.Label({
				text : "Идентификатор"
			})
		}), new sap.m.Column({
			header : new sap.m.Label({
				text : "Наименование краткое"
			})
		}), new sap.m.Column({
			header : new sap.m.Label({
				text : "Наименование полное"
			})
		}), new sap.m.Column({
			header : new sap.m.Label({
				text : "Ключевые слова"
			})
		})];
		
		oController.oTemplate = new sap.m.ColumnListItem({
			cells : [
				new sap.m.Text({
					text : "{id}",
					wrapping : false
				}),
				new sap.m.Text({
					text : "{short}",
					wrapping : false
				}),
				new sap.m.Text({
					text : "{name}",
					wrapping : false
				}),
				new sap.m.Text({
					text : "{tag}",
					wrapping : false
				})
			]
		});

 		return new sap.m.Page({
			title: "Объекты",
			content: [
				new sap.m.Table(this.createId("table"), {
					growingThreshold: 10,
					growingScrollToLoad : false,
					columns: oColumns
				})
			]
		});
	}

});