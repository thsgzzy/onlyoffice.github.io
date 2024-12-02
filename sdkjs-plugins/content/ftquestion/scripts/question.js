(function(window, undefined){
	window.Asc.plugin.init = function init() {
        // this.callCommand(() => {
        //   const oDocument = Api.GetDocument()
        //   const oParagraph = Api.CreateParagraph()
        //   oParagraph.AddText("Hello world!")
        //   oDocument.InsertContent([oParagraph])
        // }, true)
        window.Asc.plugin.executeMethod("AddToolbarMenuItem", [oToolbarMenuMainItem]);

        this.attachToolbarMenuClickEvent("insertText", function (data) {
            this.callCommand(function () {
              var oDocument = Api.GetDocument();
      
              // Create a new paragraph
              var oParagraph = Api.CreateParagraph();
      
              // Add text to the paragraph
              oParagraph.AddText("ONLYOFFICE Docs 8.1");
      
              // Style the text as a title
              oParagraph.SetBold(true);              // Make the text bold
              oParagraph.SetFontSize(24);            // Increase the font size
              oParagraph.SetJc("center");         // Align text to the center
      
              // Insert the paragraph at the beginning of the document
              oDocument.InsertContent([oParagraph],0);
            });
          });

    }
    window.Asc.plugin.button = function(id, windowId) {
        if (!modalWindow)
            return;
    
        if (windowId) {
            switch (id) {
                case -1:
                default:
                    window.Asc.plugin.executeMethod('CloseWindow', [windowId]);
            }
        }
    };

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
})(window, undefined);
