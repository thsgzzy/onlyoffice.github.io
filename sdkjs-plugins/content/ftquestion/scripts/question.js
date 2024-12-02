(function(window, undefined){
	window.Asc.plugin.init = function init() {
        // this.callCommand(() => {
        //   const oDocument = Api.GetDocument()
        //   const oParagraph = Api.CreateParagraph()
        //   oParagraph.AddText("Hello world!")
        //   oDocument.InsertContent([oParagraph])
        // }, true)

        // this.executeMethod("AddToolbarMenuItem", [getToolbarItems()]);

    }
    window.Asc.plugin.button = function button(id) {
    }

    var oToolbarMenuItem = {
        "id": "FtMenuItem",
        "type": "button",
        "text": "FT",
        "hint": "FT",
        "icons": "resources/icon.png",
        "disabled": false,
        "enableToggle": false,
        "lockInViewMode": false,
        "separator": true,
        "split": true,
        "items": [
            {
                "id": "onMenuFt",
                "text": "Explain text in comment"
            },
        ]
    };
    var oToolbarMenuTab = {
        "id": "fangtian",
        "text": "方田题库",
        "items": [oToolbarMenuItem]
    };
    var oToolbarMenuMainItem = {
        "guid": "asc.{da92c56c-dd26-4b31-a391-90f7d8c72ecc}",
        "tabs": [oToolbarMenuTab]
    };
    window.Asc.plugin.executeMethod ("AddToolbarMenuItem", [oToolbarMenuMainItem]);

    // function getToolbarItems() {
    //   let items = {
    //     guid: window.Asc.plugin.info.guid,
    //     tabs: [{
    //       id: "tab_1",
    //       text: "Insert options",
    //       items: [
    //         {
    //           id: "insertQuestion",
    //           type: "button",
    //           text: "Insert Question",
    //           hint: "insert question into the document",
    //           icons: "resources/buttons/icon.png", 
    //           lockInViewMode: true,
    //           enableToggle: false,
    //           separator: false
    //         },
    //       ]
    //     }]
    //   };
    //   return items
    // }
})(window, undefined);
