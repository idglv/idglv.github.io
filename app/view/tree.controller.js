sap.ui.controller("sap.app.view.tree", {
	onInit: function() {
        this.oModel = new sap.ui.model.json.JSONModel();

        jQuery.getJSON("./data/tree.json", function(tree) {
            this.oModel.setData({
                tree: tree
            });

            this.getView().setModel(this.oModel);
        }.bind(this));

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