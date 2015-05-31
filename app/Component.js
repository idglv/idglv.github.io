jQuery.sap.declare("sap.app.Component");

/**
 * Controls routing
 */
sap.ui.core.UIComponent.extend("sap.app.Component", {

    metadata: {

        routing: {

            config: {
                viewType: "JS",
                viewPath: "sap.app.view",      //Path to view
                targetControl: "splitApp",
                clearTarget: false,
                transition: "slide"     //Effect while moving to another site
            },

            routes: [
                {
                    pattern: "",
                    name: "default",
                    view: "tree",
                    targetAggregation: "masterPages",
                    subroutes: [
                        {
                            pattern: "",
                            name: "welcome",
                            view: "welcome",
                            targetAggregation: "detailPages"
                        },

                        {
                            pattern: "category/{catIndex}",
                            name: "apps",
                            view: "Applications",
                            targetAggregation: "detailPages"
                        },

                        {
                            pattern: "category/{catIndex}/apps/{appIndex}",
                            name: "appInfo",
                            view: "ApplicationInfo",
                            targetAggregation: "detailPages"
                        }
                    ]
                }
            ]

        }

    },

    init: function () {

        // Load resources in global jQuery scope
        jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
        jQuery.sap.require("sap.ui.core.routing.HashChanger");
        jQuery.sap.require("sap.app.util.tableGenerator");
        jQuery.sap.require("sap.app.util.rawToTree");
        jQuery.sap.includeStyleSheet("css/custom.css");

        //call createContent
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        this._router = this.getRouter();

        //initlialize the router
        this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
        this._router.initialize();
    },

    createContent: function () {


        //initialize view
        var oView = sap.ui.view({
            id: "app",
            viewName: "sap.app.view.main",
            type: "JS",
            viewData: {component: this}
        });

        return oView;

    }


});