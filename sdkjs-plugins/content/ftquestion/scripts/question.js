(function (window, undefined) {
    window.Asc.plugin.init = function () {
        this.executeMethod("AddToolbarMenuItem", [getToolbarItems()]);// the rest of the plugin code

        this.attachToolbarMenuClickEvent("insertText", function (data) {
            this.callCommand(function () {
                var oDocument = Api.GetDocument();
                // Create a new paragraph
                var oParagraph = Api.CreateParagraph();
                // Add text to the paragraph
                oParagraph.AddText(" ONLYOFFICE Docs 8.1 ");
                oParagraph.AddText(" 新增文本 ");
                // Style the text as a title
                oParagraph.SetBold(true);              // Make the text bold
                oParagraph.SetFontSize(24);            // Increase the font size
                // oParagraph.SetJc("center");         // Align text to the center
                // Insert the paragraph at the beginning of the document
                oDocument.InsertContent([oParagraph], 0);
                oDocument.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");
            });
        });


    }
    window.Asc.plugin.button = function (id, windowId) {
        if (windowId) {
            switch (id) {
                case -1:
                default:
                    window.Asc.plugin.executeMethod('CloseWindow', [windowId]);
            }
        }
    };
    function getToolbarItems() {
        let items = {
            guid: window.Asc.plugin.info.guid,
            tabs: [{
                id: "tab_1",
                text: "Insert options",
                items: [
                    {
                        id: "insertText",
                        type: "button",
                        text: "Insert text",
                        hint: "insert text into the document",
                        icons: "resources/buttons/icon.png",
                        lockInViewMode: true,
                        enableToggle: false,
                        separator: false
                    },
                ]
            }]
        };

        return items;
    }

})(window, undefined);
