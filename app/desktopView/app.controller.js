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

            var aData = [];
            var id = 100;
            while (id) {
            	id--;
            	aData.push(this.generateTable(id))
            }

                    var aTree = [{
            name: "Единая модель объектов",
            hasExpander: true,
            next: [{
                name: "Класификация объектов",
                hasExpander: true,
                next: [{
                    name: "Линейная часть магистральных труб",
                    hasExpander: false,
                    key: 1
                }, {
                    name: "Газораспределительная станция",
                    hasExpander: false,
                    key: 2
                }, {
                    name: "Компрессорная станция",
                    hasExpander: false,
                    key: 3
                }]
            }, {
                name: "Единая система газоснабжения",
                hasExpander: true,
                next: [{
                    name: "Объекты добычи газа",
                    hasExpander: false,
                    key: 4
                }, {
                    name: "Объекты общего назначения",
                    hasExpander: false,
                    key: 5
                }, {
                    name: "Объекты подземного хранения газа",
                    hasExpander: false,
                    key: 6
                }, {
                    name: "Линейная часть магистральных труб",
                    hasExpander: false,
                    key: 7
                }]
            }]
        }];



            var oModel = new sap.ui.model.json.JSONModel();

            oModel.setData({
                columns: aColumnData,
                rows: sap.app.util.tableGenerator(300),//aData,
                tree: aTree
            });

            this.getView().setModel(oModel);

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
        },

    	generateTable: function(id) {
    		function rand(mArr) {
    			return mArr[Math.random() * mArr.length << 0];
    		}

    		var shorts = ["Труба", "Кран", "Ключ", "Компрессор", "Двигатель", "Деталь", "Станция", "Защита"];
    		var names = ["Кран шаровой ПА1022.2503.63", "Труба стальная ГОСТ 10704-91", "Цех №1 комрессорный"];
    		var key = [0, 1, 2, 3, 4, 5, 6];
    		return {
    			id: id,
    			key: rand(key),
                short: rand(shorts),
                name: rand(names),
                tag: rand(shorts)
    		}
    	}
    });

})()