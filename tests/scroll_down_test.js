module.exports = {

    'user is able to scroll down': function(browser){
        const basepage = browser.page.basePage();

        basepage
            .navigate()
            .waitForElementVisible('@menuScrollDown')
            .scrollDown();
    }
    
    
}