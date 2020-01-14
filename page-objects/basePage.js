const commands = {
    scrollDown: function() {
        this.menuScrollDown.click();
    },
    
    assertModuleHeaderText: function(browser) {
        // return moduleHeader.assert.containsText(expected);
        return browser.assert.containsText(moduleHeader,'moduleHeader'); 
    }
};

module.exports = {
    url: 'https://ultimateqa.com/automation/',
    commands: [ commands ],
    elements: {

        moduleHeader: {
            selector: '#Automation_Practice',
            locateStrategy: 'css selector'    
        },

        menuScrollDown: {
            selector: '.menu-scroll-down',
            locateStrategy: 'css selector'
        },

        searchInput: {
            selector: '#searchform #s',
            locateStrategy: 'css selector'
        },

        searchSubmit: {
            selector: '#searchform #searchsubmit',
            locateStrategy: 'css selector'    
        }


    }
};