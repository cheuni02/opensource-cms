module.exports = {
    url: 'https://s1.demo.opensourcecms.com/wordpress/',
    elements: {

        menuScrollDown: {
            selector: 'menu-scroll-down',
            locateStrategy: 'css locator'
        },

        searchInput: {
            selector: '#search-form-1',
            locateStrategy: 'css selector'
        },

        searchSubmit: {
            selector: '.search-submit',
            locateStrategy: 'css selector'    
        }


    }
};