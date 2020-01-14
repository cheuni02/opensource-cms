module.exports = {
    'check page header text is correct': function(browser){
        const basepage = browser.page.basePage();
        basepage
            .navigate()
            .waitForElementVisible('@moduleHeader')
            .assert.title('Automation Practice - Ultimate QA')
            .assert.containsText('@moduleHeader','Automation Practice');
    }


};