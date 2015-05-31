sap.ui.controller("sap.app.view.tree", {
	onInit: function() {
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
        }]

		this.oModel = new sap.ui.model.json.JSONModel({
			tree: aTree
		});
		this.getView().setModel(this.oModel);

		this.cache();
		
		this.state = [];
	},

	cache: function() {
		this.list = this.getView().byId("list");

		this.page1 = this.getView().byId("page1");
		this.page2 = this.getView().byId("page2");
		this.page3 = this.getView().byId("page3");

		this.navContainer = this.getView().byId("navContainer");
	},
	
	handleNavButtonPress: function(e) {
		var currentPage = this.list.getParent();
		
		this.oModel.setData(this.state.pop());

		this._changePage("back");
	},

	handlePressList: function(e) {
		var element = e.getParameter("listItem");
		if (element.getBindingContext().getObject().hasExpander) {
			var next = element.getBindingContext().getObject().next;
			this.state.push(this.oModel.getData());

			if (next && next.length) {
				this.oModel.setData({
					tree: next
				})
			}

			this._changePage("next");
		} else {
			sap.ui.getCore().getEventBus().publish("table", "filter", element.data("key"));
		}
	},

	_changePage: function(direction) {
		var currentPage = this.list.getParent();
		var nextPage = this.getView().byId(currentPage.data(direction));
		if (nextPage) {
			nextPage.addContent(this.list)
			if (direction === "next") {
				this.navContainer.to(nextPage);
			} else {
				this.navContainer.back();
			}
		}
	}
});