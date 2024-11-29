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
